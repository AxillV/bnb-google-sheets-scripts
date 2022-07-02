function clearRange() {
  //replace 'Sheet1' with your actual sheet name
  var sheet = SpreadsheetApp.getActive().getSheetByName('Front End Sheet');
  sheet.getRange('A2:B21').clearContent();
}