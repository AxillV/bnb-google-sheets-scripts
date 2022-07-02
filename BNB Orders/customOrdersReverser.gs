
//function onEdit(e) {
//    var activeSheet = e.source.getActiveSheet();
//    var orderSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Yolo Private Orders");
//    
//    orderSheet.getRange(50,2).setValue("LOL")
//  
//    if (activeSheet.getName() == "Yolo Private Orders" && e.range().getRowIndex() == 2){
//    
//      //orderSheet.getRange(50,2).setValue("LdadadadaOL")
//      orderSheet.insertRowBefore(2);
//  
//      orderSheet.getRange(2, 15, 1, 3).setValues([["=sum(J2:J)", "=sum(L2:L)", "=P2-O2"]]);
//      orderSheet.getRange(4, 15, 1, 3).copyTo(orderSheet.getRange(3, 15));
//  
//      orderSheet.getRange(3, 10, orderSheet.getLastRow(), 1).clearContent();
//      SpreadsheetApp.flush();
//  
//      orderSheet.getRange(2, 10).setValue('=ArrayFormula(IF(NOT(ISBLANK(H2:H)); H2:H + I2:I + G2:G; ""))');
//  
//      SpreadsheetApp.flush();
//      
//    }
//  
//}
