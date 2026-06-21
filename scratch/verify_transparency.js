import sharp from 'sharp';

async function verify() {
  const imgPath = 'src/assets/goodlife-logo-master-transparent.png';
  const { data, info } = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  console.log(`Verifying pixels of ${imgPath}:`);
  
  // Corners
  const corners = [
    { name: 'Top-Left', x: 0, y: 0 },
    { name: 'Top-Right', x: width - 1, y: 0 },
    { name: 'Bottom-Left', x: 0, y: height - 1 },
    { name: 'Bottom-Right', x: width - 1, y: height - 1 }
  ];
  
  let allZero = true;
  for (const c of corners) {
    const idx = (c.y * width + c.x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];
    console.log(`${c.name} corner (${c.x}, ${c.y}): RGBA(${r}, ${g}, ${b}, ${a})`);
    if (a !== 0) allZero = false;
  }
  
  if (allZero) {
    console.log("✓ Success: All corners are 100% transparent.");
  } else {
    console.log("✗ Warning: Some corners are not fully transparent.");
  }
}

verify().catch(console.error);
