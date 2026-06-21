import fs from 'node:fs';
import path from 'node:path';
import { google } from 'googleapis';

// Helper to manually parse .env since dotenv is not in dependencies
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env file not found in project root!');
    process.exit(1);
  }
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const firstEquals = trimmed.indexOf('=');
    if (firstEquals === -1) continue;
    const key = trimmed.substring(0, firstEquals).trim();
    let val = trimmed.substring(firstEquals + 1).trim();
    // Remove enclosing quotes if any
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    // Replace literal newlines in private key
    process.env[key] = val.replace(/\\n/g, '\n');
  }
}

loadEnv();

const requiredEnv = ['GOOGLE_SERVICE_ACCOUNT_EMAIL', 'GOOGLE_PRIVATE_KEY', 'GOOGLE_SHEET_ID'];
for (const envVar of requiredEnv) {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
}

// Path to the extracted reviews JSON
const reviewsJsonPath = "C:/Users/AMOL/.gemini/antigravity/brain/b1403d92-e794-47c6-9841-5ffb7056544c/scratch/extracted_reviews.json";
if (!fs.existsSync(reviewsJsonPath)) {
  console.error(`Extracted reviews JSON not found at: ${reviewsJsonPath}`);
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(reviewsJsonPath, 'utf8'));

// Format local reviews with unique IDs and ratings
// Mapping:
// gym_member_reviews -> 3star
// fitness_journey -> 4star
// 5_star -> 5star
const localReviews = [];

// 3-star
rawData.gym_member_reviews.forEach((reviewText, index) => {
  const paddedIndex = String(index + 1).padStart(3, '0');
  localReviews.push({
    id: `3star-${paddedIndex}`,
    star_rating: 3,
    review_text: reviewText,
    used: 'FALSE',
    used_at: ''
  });
});

// 4-star
rawData.fitness_journey.forEach((reviewText, index) => {
  const paddedIndex = String(index + 1).padStart(3, '0');
  localReviews.push({
    id: `4star-${paddedIndex}`,
    star_rating: 4,
    review_text: reviewText,
    used: 'FALSE',
    used_at: ''
  });
});

// 5-star
rawData["5_star"].forEach((reviewText, index) => {
  const paddedIndex = String(index + 1).padStart(3, '0');
  localReviews.push({
    id: `5star-${paddedIndex}`,
    star_rating: 5,
    review_text: reviewText,
    used: 'FALSE',
    used_at: ''
  });
});

console.log(`Local reviews compiled: ${localReviews.length} total rows.`);

// Authenticate with Google Sheets API
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = process.env.GOOGLE_SHEET_ID;
const range = 'reviews!A:E';

async function run() {
  try {
    console.log('Fetching existing sheet rows...');
    let existingRows = [];
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      existingRows = response.data.values || [];
    } catch (err) {
      console.error('Error fetching sheet rows. Make sure spreadsheet ID is correct and sheet tab "reviews" exists.');
      throw err;
    }

    const hasHeader = existingRows.length > 0 && existingRows[0][0] === 'id';
    
    // Create list of existing review IDs
    const existingIds = new Set();
    if (hasHeader) {
      existingRows.slice(1).forEach(row => {
        if (row[0]) existingIds.add(row[0]);
      });
    }

    const rowsToAppend = [];
    
    // Add header if completely empty
    if (existingRows.length === 0) {
      rowsToAppend.push(['id', 'star_rating', 'review_text', 'used', 'used_at']);
    }

    // Filter and append new local reviews
    let skipCount = 0;
    localReviews.forEach(review => {
      if (existingIds.has(review.id)) {
        skipCount++;
      } else {
        rowsToAppend.push([
          review.id,
          String(review.star_rating),
          review.review_text,
          review.used,
          review.used_at
        ]);
      }
    });

    if (skipCount > 0) {
      console.log(`Skipped ${skipCount} reviews already present in sheet.`);
    }

    if (rowsToAppend.length > 0) {
      console.log(`Appending ${rowsToAppend.length} rows to the sheet...`);
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: rowsToAppend
        }
      });
      console.log('Sheet successfully updated!');
    } else {
      console.log('No new rows to append. Sheet is already up-to-date.');
    }
  } catch (err) {
    console.error('Execution failed:', err);
    process.exit(1);
  }
}

run();
