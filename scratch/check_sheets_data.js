import fs from 'node:fs';
import path from 'node:path';
import { google } from 'googleapis';

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

async function run() {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'reviews!A:E',
    });

    const rows = response.data.values || [];
    console.log("Total rows found (including header):", rows.length);
    if (rows.length > 0) {
      console.log("Header:", rows[0]);
    }
    console.log("First 5 data rows:");
    for (let i = 1; i < Math.min(6, rows.length); i++) {
      console.log(`Row ${i + 1}:`, {
        id: rows[i][0],
        star_rating: rows[i][1],
        review_text: rows[i][2] ? rows[i][2].substring(0, 30) + "..." : undefined,
        used: rows[i][3],
        used_type: typeof rows[i][3],
        used_at: rows[i][4]
      });
    }
  } catch (err) {
    console.error("Failed to query sheet:", err);
  }
}

run();
