import sharp from 'sharp';

async function checkEdges() {
  const imgPath = 'src/assets/goodlife-logo-master.png';
  const { data, info } = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Original image edges statistics:`);
  
  let nonBlackTop = 0;
  let nonBlackBottom = 0;
  let nonBlackLeft = 0;
  let nonBlackRight = 0;

  for (let x = 0; x < width; x++) {
    // Top edge
    const idxTop = (0 * width + x) * channels;
    if (Math.max(data[idxTop], data[idxTop+1], data[idxTop+2]) >= 20) {
      nonBlackTop++;
    }

    // Bottom edge
    const idxBottom = ((height - 1) * width + x) * channels;
    if (Math.max(data[idxBottom], data[idxBottom+1], data[idxBottom+2]) >= 20) {
      nonBlackBottom++;
    }
  }

  for (let y = 0; y < height; y++) {
    // Left edge
    const idxLeft = (y * width + 0) * channels;
    if (Math.max(data[idxLeft], data[idxLeft+1], data[idxLeft+2]) >= 20) {
      nonBlackLeft++;
    }

    // Right edge
    const idxRight = (y * width + (width - 1)) * channels;
    if (Math.max(data[idxRight], data[idxRight+1], data[idxRight+2]) >= 20) {
      nonBlackRight++;
    }
  }

  console.log(`Non-black pixels (val >= 20) on Top edge: ${nonBlackTop} / ${width}`);
  console.log(`Non-black pixels (val >= 20) on Bottom edge: ${nonBlackBottom} / ${width}`);
  console.log(`Non-black pixels (val >= 20) on Left edge: ${nonBlackLeft} / ${height}`);
  console.log(`Non-black pixels (val >= 20) on Right edge: ${nonBlackRight} / ${height}`);
}

checkEdges().catch(console.error);
