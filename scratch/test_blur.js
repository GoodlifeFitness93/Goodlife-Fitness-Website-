import sharp from 'sharp';

async function testBlur() {
  const srcPath = 'src/assets/goodlife-logo-master.png';
  const image = sharp(srcPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log("Image loaded.");
  
  // Flood fill to find background
  const visited = new Uint8Array(width * height);
  const isBackground = new Uint8Array(width * height);
  const queue = [];

  function isNearBlack(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return Math.max(r, g, b) < 20;
  }

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

  // Create initial alpha
  const alpha = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) {
    alpha[i] = isBackground[i] ? 0 : 255;
  }

  console.log("Applying custom boundary-aware box blur in JS...");
  const t0 = Date.now();
  const blurredAlpha = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let sum = 0;
      let count = 0;
      for (let dy = -2; dy <= 2; dy++) { // 5x5 blur for smoother feathering
        const ny = y + dy;
        if (ny >= 0 && ny < height) {
          for (let dx = -2; dx <= 2; dx++) {
            const nx = x + dx;
            if (nx >= 0 && nx < width) {
              sum += alpha[ny * width + nx];
              count++;
            }
          }
        }
      }
      blurredAlpha[y * width + x] = Math.round(sum / count);
    }
  }
  console.log(`Custom blur took ${Date.now() - t0} ms.`);

  // Verify corners
  const corners = [
    { name: 'Top-Left', x: 0, y: 0 },
    { name: 'Top-Right', x: width - 1, y: 0 },
    { name: 'Bottom-Left', x: 0, y: height - 1 },
    { name: 'Bottom-Right', x: width - 1, y: height - 1 }
  ];

  for (const c of corners) {
    const val = blurredAlpha[c.y * width + c.x];
    console.log(`${c.name} corner (${c.x}, ${c.y}) alpha: ${val}`);
  }
}

testBlur().catch(console.error);
