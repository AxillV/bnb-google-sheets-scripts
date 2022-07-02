// These functions edit the cells that have API data, so their values get reset, and by extend, every single other data in this spreadsheet. Also it takes care of Historic Data.
function refreshGESI() {
 var ss = SpreadsheetApp.getActiveSpreadsheet()
 var sheet1 = ss.getSheetByName('Raw Assets')
 var sheet2 = ss.getSheetByName('Raw Assets Prices') 
 var sheet3 = ss.getSheetByName('Wallets') 
 var sheet4 = ss.getSheetByName('Raw Orders')
 var sheet5 = ss.getSheetByName('Raw Manufacturing')
 var sheet6 = ss.getSheetByName('Manufacturing Prices') 
 
 sheet1.getRange(1, 1).setValue("")
 SpreadsheetApp.flush();
 sheet1.getRange(1, 1).setValue('=corporations_corporation_assets("Inaru Odoacer"; -1)')
 
 sheet2.clear()
 SpreadsheetApp.flush();
 sheet2.getRange(1, 1).setValue("=loadRegionAggregates('Raw Assets'!H2:H1000)")
 
 sheet3.getRange(2, 1).setValue('')
 SpreadsheetApp.flush();
 sheet3.getRange(2, 1).setValue('=corporations_corporation_wallets("Inaru Odoacer"; False)')
 
 sheet4.getRange(1, 1).setValue('')
 SpreadsheetApp.flush();
 sheet4.getRange(1, 1).setValue('=corporations_corporation_orders("Inaru Odoacer"; -1)') 
 SpreadsheetApp.flush();
  
 sheet6.clear()
 SpreadsheetApp.flush();
 sheet5.getRange(1, 1).setValue('=corporations_corporation_industry_jobs(FALSE; "Inaru Odoacer")')
 
 sheet6.clear()
 SpreadsheetApp.flush();
 sheet6.getRange(1, 1).setValue("=loadRegionAggregates('Raw Manufacturing'!R2:R)")
}

function updateHistory() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet0 = ss.getSheetByName('Historic Data - 60 Days');
  var sheet1 = ss.getSheetByName('Historic Data - All Time');
  var sheet2 = ss.getSheetByName('Assets');
  var sheet3 = ss.getSheetByName('Wallets');
  var sheet4 = ss.getSheetByName('Orders');
  var sheet5 = ss.getSheetByName('Manufacturing Jobs');
  
  var d = new Date();
  var currentTime = d.toDateString();
  
  var totalAssets = sheet2.getRange(2, 5).getValue();
  var totalWallets = sheet3.getRange(2, 3).getValue();
  var totalOrders = sheet4.getRange(2, 5).getValue();
  var totalJobs = sheet5.getRange(2, 5).getValue();
  
  oldData1 = sheet1.getRange(2, 1, sheet1.getLastRow() - 1, 5).getValues();
  newData = [[currentTime, totalAssets, totalWallets, totalOrders, totalJobs]]

  sheet0.deleteRow(121)
  
  oldData0 = sheet0.getRange(2, 1, sheet0.getLastRow() - 1, 5).getValues(); 
  newData = [[currentTime, totalAssets, totalWallets, totalOrders, totalJobs]]
  
  sheet0.getRange(2, 1, 1, 5).setValues(newData);
  sheet0.getRange(3, 1, sheet0.getLastRow() - 1, 5).setValues(oldData0);
  
  sheet1.getRange(2, 1, 1, 5).setValues(newData);
  sheet1.getRange(3, 1, sheet1.getLastRow() - 1, 5).setValues(oldData1);
}

function finalUpdate() {
  refreshGESI();
  SpreadsheetApp.flush();
  Utilities.sleep(10000)
  updateHistory()
}