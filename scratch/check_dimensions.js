import sharp from 'sharp';
import path from 'path';

const artifactsDir = 'C:\\Users\\AMOL\\.gemini\\antigravity\\brain\\b1403d92-e794-47c6-9841-5ffb7056544c';

async function check() {
  const images = [
    'media__1782061235602.jpg',
    'media__1782063152437.jpg'
  ];

  for (const img of images) {
    const filePath = path.join(artifactsDir, img);
    const metadata = await sharp(filePath).metadata();
    console.log(`Image: ${img}, Width: ${metadata.width}, Height: ${metadata.height}, Format: ${metadata.format}`);
  }
}

check().catch(console.error);
