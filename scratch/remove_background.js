import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

async function removeBackground() {
  const srcPath = 'src/assets/goodlife-logo-master.png';
  const destPath = 'src/assets/goodlife-logo-master-transparent.png';

  console.log("Loading image:", srcPath);
  const image = sharp(srcPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  console.log(`Dimensions: ${width}x${height}, channels: ${channels}`);

  // Create a 2D visited array
  const visited = new Uint8Array(width * height);
  const isBackground = new Uint8Array(width * height);

  // Queue for flood-fill (contains 1D indices)
  const queue = [];

  // Helper to check if a pixel is near-black
  function isNearBlack(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Threshold: max channel is less than 20
    return Math.max(r, g, b) < 20;
  }

  // Add all boundary pixels to queue if they are near black
  for (let x = 0; x < width; x++) {
    // Top row
    let idx = (0 * width + x) * 4;
    if (isNearBlack(idx)) {
      const pIdx = 0 * width + x;
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
    // Bottom row
    idx = ((height - 1) * width + x) * 4;
    if (isNearBlack(idx)) {
      const pIdx = (height - 1) * width + x;
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
  }
  for (let y = 0; y < height; y++) {
    // Left column
    let idx = (y * width + 0) * 4;
    if (isNearBlack(idx) && !visited[y * width]) {
      const pIdx = y * width;
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
    // Right column
    idx = (y * width + (width - 1)) * 4;
    if (isNearBlack(idx) && !visited[y * width + (width - 1)]) {
      const pIdx = y * width + (width - 1);
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
  }

  console.log(`Starting flood fill with ${queue.length} seed pixels...`);

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // 4 neighbors
    const neighbors = [
      [cx - 1, cy],
      [cx + 1, cy],
      [cx, cy - 1],
      [cx, cy + 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx]) {
          visited[nIdx] = 1;
          const pixelByteIdx = nIdx * 4;
          if (isNearBlack(pixelByteIdx)) {
            isBackground[nIdx] = 1;
            queue.push(nIdx);
          }
        }
      }
    }
  }

  console.log(`Flood fill complete. Found ${queue.length} background pixels.`);

  // Create initial alpha channel (grayscale)
  const alphaBuffer = Buffer.alloc(width * height);
  for (let i = 0; i < width * height; i++) {
    alphaBuffer[i] = isBackground[i] ? 0 : 255;
  }

  // To feather, we apply a custom 5x5 boundary-aware box blur
  console.log("Feathering edges using custom box blur...");
  const blurredAlpha = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let sum = 0;
      let count = 0;
      for (let dy = -2; dy <= 2; dy++) {
        const ny = y + dy;
        if (ny >= 0 && ny < height) {
          for (let dx = -2; dx <= 2; dx++) {
            const nx = x + dx;
            if (nx >= 0 && nx < width) {
              sum += alphaBuffer[ny * width + nx];
              count++;
            }
          }
        }
      }
      blurredAlpha[y * width + x] = Math.round(sum / count);
    }
  }

  // Construct the final transparent image data
  const finalData = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * 4;
    const destIdx = i * 4;
    
    // Copy RGB
    finalData[destIdx] = data[srcIdx];
    finalData[destIdx + 1] = data[srcIdx + 1];
    finalData[destIdx + 2] = data[srcIdx + 2];
    
    // Use blurred alpha
    const alphaVal = blurredAlpha[i];
    finalData[destIdx + 3] = alphaVal;

    // Un-multiply color by alpha to remove the black background blending!
    if (alphaVal > 0 && alphaVal < 255) {
      const factor = 255 / alphaVal;
      finalData[destIdx] = Math.min(255, Math.round(data[srcIdx] * factor));
      finalData[destIdx + 1] = Math.min(255, Math.round(data[srcIdx + 1] * factor));
      finalData[destIdx + 2] = Math.min(255, Math.round(data[srcIdx + 2] * factor));
    }
  }

  console.log("Saving transparent image to:", destPath);
  await sharp(finalData, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(destPath);

  console.log("Success! Verify transparent image details:");
  const meta = await sharp(destPath).metadata();
  console.log(`Output: ${destPath}, Format: ${meta.format}, Channels: ${meta.channels}, HasAlpha: ${meta.hasAlpha}`);
}

removeBackground().catch(console.error);
