import sharp from 'sharp';

async function checkOriginal() {
  const imgPath = 'src/assets/goodlife-logo-master.png';
  const { data, info } = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  console.log(`Original corners:`);
  const corners = [
    { name: 'Top-Left', x: 0, y: 0 },
    { name: 'Top-Right', x: width - 1, y: 0 },
    { name: 'Bottom-Left', x: 0, y: height - 1 },
    { name: 'Bottom-Right', x: width - 1, y: height - 1 }
  ];
  
  for (const c of corners) {
    const idx = (c.y * width + c.x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = channels === 4 ? data[idx + 3] : 255;
    console.log(`${c.name} corner (${c.x}, ${c.y}): RGBA(${r}, ${g}, ${b}, ${a})`);
  }
}

checkOriginal().catch(console.error);
