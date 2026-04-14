// =============================================================
// Google Apps Script — paste this into your Google Sheet's
// Extensions > Apps Script editor, then deploy as a Web App.
//
// Sheet ID: 1nMQeY8j3a05a8g7Hypyopxwr_Qz5OP4MvEFtPJRn8c4
// =============================================================

function doPost(e) {
  var sheet = SpreadsheetApp.openById('1nMQeY8j3a05a8g7Hypyopxwr_Qz5OP4MvEFtPJRn8c4').getActiveSheet();

  // Add headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Name', 'Email', 'Attending', 'Guest Count', 'Timestamp']);
  }

  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.name,
    data.email,
    data.attending,
    data.guestCount,
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
