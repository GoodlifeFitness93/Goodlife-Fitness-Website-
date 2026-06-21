import sharp from 'sharp';

async function checkMask() {
  const srcPath = 'src/assets/goodlife-logo-master.png';
  const image = sharp(srcPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  const visited = new Uint8Array(width * height);
  const isBackground = new Uint8Array(width * height);
  const queue = [];

  function isNearBlack(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return Math.max(r, g, b) < 20;
  }

  // Add all boundary pixels to queue
  for (let x = 0; x < width; x++) {
    let idx = (0 * width + x) * 4;
    if (isNearBlack(idx)) {
      const pIdx = 0 * width + x;
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
    idx = ((height - 1) * width + x) * 4;
    if (isNearBlack(idx)) {
      const pIdx = (height - 1) * width + x;
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
  }
  for (let y = 0; y < height; y++) {
    let idx = (y * width + 0) * 4;
    if (isNearBlack(idx) && !visited[y * width]) {
      const pIdx = y * width;
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
    idx = (y * width + (width - 1)) * 4;
    if (isNearBlack(idx) && !visited[y * width + (width - 1)]) {
      const pIdx = y * width + (width - 1);
      queue.push(pIdx);
      visited[pIdx] = 1;
      isBackground[pIdx] = 1;
    }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

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

  console.log("Checking raw mask (isBackground) at Bottom-Right corner:");
  for (let dy = -4; dy <= 0; dy++) {
    const y = height + dy - 1; // Correct index bounds (0 to 1023)
    let line = '';
    for (let dx = -4; dx <= 0; dx++) {
      const x = width + dx - 1; // Correct index bounds (0 to 1023)
      const pIdx = y * width + x;
      line += `${isBackground[pIdx]} `.padEnd(3);
    }
    console.log(`Y=${y}: ${line}`);
  }
}

checkMask().catch(console.error);
