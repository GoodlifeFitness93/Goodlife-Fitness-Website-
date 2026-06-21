import fs from 'node:fs';
import path from 'node:path';

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const firstEquals = trimmed.indexOf('=');
    if (firstEquals === -1) continue;
    const key = trimmed.substring(0, firstEquals).trim();
    let val = trimmed.substring(firstEquals + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    process.env[key] = val.replace(/\\n/g, '\n');
  }
}

loadEnv();

// Dynamically import the sheets.server file
import('../src/lib/api/sheets.server.ts')
  .then(async (module) => {
    console.log("Querying for 5 stars...");
    const res5 = await module.getUnusedReviewFromSheet(5);
    console.log("5 Star Result:", res5);

    console.log("Querying for 4 stars...");
    const res4 = await module.getUnusedReviewFromSheet(4);
    console.log("4 Star Result:", res4);

    console.log("Querying for 3 stars...");
    const res3 = await module.getUnusedReviewFromSheet(3);
    console.log("3 Star Result:", res3);
  })
  .catch((err) => {
    console.error("Failed to import module:", err);
  });
