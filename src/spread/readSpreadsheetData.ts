export function readSpreadsheetData() {
  const spreadsheetId = '1LpinSWC2dJKhkZfsHUHbvGISTrQRZxwNwQpseOwVU9Q'; // 読み込むスプレッドシートのIDを入力してください
  const sheetName = 'test'; // 読み込むシート名を入力してください

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName(sheetName);
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  //ヘッダー
  const DATA_ZONE = 1;

  //データ部

  const EMAIL_COLUMN = 1;
  const ROLE_COLUMN = 2;
  const CREATEDAY_COLUMN = 5;
  const DONE_COLUMN = 6;

  const Users = [];

  // データをコンソールに出力
  for (let i = DATA_ZONE; i < values.length; i++) {
    const row = values[i];

    if (row[CREATEDAY_COLUMN] !== '' && row[DONE_COLUMN] === '') {
      const user = {};
      user.email = row[EMAIL_COLUMN];
      user.role = row[ROLE_COLUMN];

      Users.push(user);
    }
  }
  return Users;
}
