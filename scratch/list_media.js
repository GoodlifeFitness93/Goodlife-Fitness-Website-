import fs from 'node:fs';
import path from 'node:path';

// Let's identify the files in the artifacts directory
const artifactsDir = 'C:\\Users\\AMOL\\.gemini\\antigravity\\brain\\b1403d92-e794-47c6-9841-5ffb7056544c';
const files = fs.readdirSync(artifactsDir).filter(f => f.startsWith('media__') && (f.endsWith('.jpg') || f.endsWith('.png')));

console.log("Found files:", files);

for (const file of files) {
  const filePath = path.join(artifactsDir, file);
  const stats = fs.statSync(filePath);
  console.log(`File: ${file}, Size: ${stats.size} bytes`);
}
