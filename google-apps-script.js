// =============================================================
// Google Apps Script — paste this into your Google Sheet's
// Extensions > Apps Script editor, then deploy as a NEW Web App.
//
// Sheet ID: 1nMQeY8j3a05a8g7Hypyopxwr_Qz5OP4MvEFtPJRn8c4
//
// Sheet columns:
// Name | Email | Guest Group | Attending | Sangeet | Wedding | Reception | Timestamp
// =============================================================

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Add headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Name', 'Email', 'Guest Group', 'Attending', 'Sangeet', 'Wedding', 'Reception', 'Timestamp']);
  }

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch(err) {
    data = JSON.parse(e.parameter.data);
  }

  sheet.appendRow([
    data.name,
    data.email,
    data.guestGroup,
    data.attending,
    data.sangeet,
    data.wedding,
    data.reception,
    data.timestamp
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
