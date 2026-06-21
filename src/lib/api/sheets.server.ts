import { google } from 'googleapis';

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !privateKey || !spreadsheetId) {
    throw new Error('Missing Google Sheets API environment variables on the server.');
  }

  // Handle escaped newlines in env variables
  const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email,
    key: formattedPrivateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  return {
    sheets: google.sheets({ version: 'v4', auth }),
    spreadsheetId
  };
}

export async function getUnusedReviewFromSheet(starRating: number) {
  try {
    const { sheets, spreadsheetId } = getSheetsClient();
    const range = 'reviews!A:E';

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    if (rows.length <= 1) {
      return { error: 'pool_exhausted' };
    }

    // Exclude header row
    const reviews = rows.slice(1).map((row, index) => ({
      rowIndex: index + 1, // Store 0-based offset relative to slice(1), which is index + 1
      id: row[0],
      starRating: parseInt(row[1], 10),
      reviewText: row[2],
      used: row[3],
      usedAt: row[4]
    }));

    // Filter reviews matching the star rating and not used
    const candidates = reviews.filter(
      r => r.starRating === starRating && r.used !== 'TRUE' && r.reviewText
    );

    if (candidates.length === 0) {
      return { error: 'pool_exhausted' };
    }

    // Pick a random review
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const selected = candidates[randomIndex];

    return {
      id: selected.id,
      reviewText: selected.reviewText
    };
  } catch (error: any) {
    console.error('Error in getUnusedReviewFromSheet:', error);
    throw new Error(`Failed to fetch review from sheet: ${error.message}`);
  }
}

export async function markReviewUsedInSheet(id: string) {
  try {
    const { sheets, spreadsheetId } = getSheetsClient();
    const range = 'reviews!A:E';

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    if (rows.length <= 1) {
      throw new Error(`Review ID ${id} not found in spreadsheet.`);
    }

    // Find row index (1-based sheet row number is index + 1)
    let matchedRowIndex = -1;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0] === id) {
        matchedRowIndex = i + 1; // 1-based index for Google Sheets
        break;
      }
    }

    if (matchedRowIndex === -1) {
      throw new Error(`Review ID ${id} not found in spreadsheet.`);
    }

    const updateRange = `reviews!D${matchedRowIndex}:E${matchedRowIndex}`;
    const isoTimestamp = new Date().toISOString();

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: updateRange,
      valueInputOption: 'RAW',
      requestBody: {
        values: [['TRUE', isoTimestamp]]
      }
    });

    console.log(`Successfully marked review ${id} as used at row ${matchedRowIndex}.`);
    return { success: true };
  } catch (error: any) {
    console.error('Error in markReviewUsedInSheet:', error);
    throw new Error(`Failed to mark review as used: ${error.message}`);
  }
}
