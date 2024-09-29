function onEdit(e) {
    var range = e.range;
    var row = range.getRow();
    var column = range.getColumn();
    var sheet = range.getSheet();
  
    // Get the value of the cell in column 2 (assuming you want to hide the row based on changes in column 2)
    var value = sheet.getRange(row, column).getValue();
  
    // Hide the row if the value is "hide" (you can replace "hide" with your desired condition)
    if (value === "Completed") {
      sheet.hideRows(row);
    }
  }