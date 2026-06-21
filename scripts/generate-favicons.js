import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const sourceFile = path.resolve('src/assets/goodlife-logo-master-transparent.png');
const publicDir = path.resolve('public');

async function generate() {
  console.log("Generating favicons from:", sourceFile);
  
  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source image not found at ${sourceFile}`);
  }
  
  // 1. Generate PNGs at required sizes
  const sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
  };
  
  for (const [filename, size] of Object.entries(sizes)) {
    const dest = path.join(publicDir, filename);
    await sharp(sourceFile)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(dest);
    console.log(`Generated: ${filename} (${size}x${size})`);
  }
  
  // 2. Generate multi-size favicon.ico (16, 32, 48)
  const icoSizes = [16, 32, 48];
  const icoPngBuffers = [];
  
  for (const size of icoSizes) {
    const buf = await sharp(sourceFile)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    icoPngBuffers.push(buf);
  }
  
  const icoBuffer = createIco(icoPngBuffers, icoSizes);
  const icoDest = path.join(publicDir, 'favicon.ico');
  fs.writeFileSync(icoDest, icoBuffer);
  console.log(`Generated: favicon.ico containing ${icoSizes.join(', ')}`);
  
  // 3. Programmatically verify dimensions/sizes and transparency
  console.log("\nVerifying outputs...");
  const expectedFiles = [
    { name: 'favicon-16x16.png', w: 16, h: 16 },
    { name: 'favicon-32x32.png', w: 32, h: 32 },
    { name: 'apple-touch-icon.png', w: 180, h: 180 },
    { name: 'android-chrome-192x192.png', w: 192, h: 192 },
    { name: 'android-chrome-512x512.png', w: 512, h: 512 },
  ];
  
  for (const f of expectedFiles) {
    const dest = path.join(publicDir, f.name);
    if (!fs.existsSync(dest)) {
      throw new Error(`File missing: ${f.name}`);
    }
    const meta = await sharp(dest).metadata();
    if (meta.width !== f.w || meta.height !== f.h) {
      throw new Error(`Invalid dimensions for ${f.name}: expected ${f.w}x${f.h}, got ${meta.width}x${meta.height}`);
    }
    if (!meta.hasAlpha) {
      throw new Error(`Output file ${f.name} does not have an alpha channel!`);
    }
    const pixelData = await sharp(dest).raw().toBuffer({ resolveWithObject: true });
    const tlAlpha = pixelData.data[3];
    if (tlAlpha !== 0) {
      throw new Error(`Output file ${f.name} corner is not transparent (alpha = ${tlAlpha})!`);
    }
    console.log(`✓ Verified: ${f.name} (${meta.width}x${meta.height}) - Transparent - Size: ${fs.statSync(dest).size} bytes`);
  }
  
  if (!fs.existsSync(icoDest)) {
    throw new Error(`File missing: favicon.ico`);
  }
  console.log(`✓ Verified: favicon.ico - Size: ${fs.statSync(icoDest).size} bytes`);
}

function createIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  
  const buffer = Buffer.alloc(headerSize + entrySize * count + pngBuffers.reduce((sum, b) => sum + b.length, 0));
  
  // Header
  buffer.writeUInt16LE(0, 0); // Reserved
  buffer.writeUInt16LE(1, 2); // Type = 1 (ICO)
  buffer.writeUInt16LE(count, 4); // Count
  
  let offset = headerSize + entrySize * count;
  
  for (let i = 0; i < count; i++) {
    const png = pngBuffers[i];
    const size = sizes[i];
    const entryOffset = headerSize + i * entrySize;
    
    buffer.writeUInt8(size >= 256 ? 0 : size, entryOffset + 0); // Width
    buffer.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1); // Height
    buffer.writeUInt8(0, entryOffset + 2); // Color palette count
    buffer.writeUInt8(0, entryOffset + 3); // Reserved
    buffer.writeUInt16LE(1, entryOffset + 4); // Color planes
    buffer.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
    buffer.writeUInt32LE(png.length, entryOffset + 8); // Size of image data
    buffer.writeUInt32LE(offset, entryOffset + 12); // Offset to image data
    
    png.copy(buffer, offset);
    offset += png.length;
  }
  
  return buffer;
}

generate().catch(err => {
  console.error("Favicon generation failed:", err);
  process.exit(1);
});
