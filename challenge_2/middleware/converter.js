const fs = require('fs');
const path = require('path');

let convertToCsv = function(req, res, next){
  if (req.body.input_json === undefined) {
    console.log('EMPTY!!!');
  } else {
  const csvRows = [];
  //Get all keys and put in set
  const keySet = new Set();

  let getColumns = function(dataObj) {
    //do the work
    //work: get column labels
    for (const key in dataObj) {
      if (key !== 'children') {
        keySet.add(key);
      }
    }
    //check base case
    let children = dataObj.children;
    //check: are there children?
    if (children.length > 0) {
      //move toward base case
      for (let i = 0; i < children.length; i++) {
        //recurse
        getColumns(children[i]);
      }
    }
  };

  let getTopRow = function(columnData) {
    let topRow = '';
    keySet.forEach((element) => {
      topRow= topRow + element + ', ';
    });
    topRow = topRow.substring(0, topRow.length - 2);
    csvRows.push(topRow);
  }

  let getValues = function(dataObj) {
    let row = '';
    keySet.forEach((element) => {
      row = row + dataObj[element] + ', ';
    });
    row = row.substring(0, row.length - 2); //remove trailing comma
    csvRows.push(row);
    let children = dataObj.children;
    if (children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        getValues(children[i])
      }
    }
  };

  getColumns(JSON.parse(req.body.input_json));
  getTopRow();
  getValues(JSON.parse(req.body.input_json));

  let csvData = ''
  for (let i = 0; i < csvRows.length - 1; i++) {
    csvData = csvData + csvRows[i] + '\n';
  }
  req.csvData = csvData;
  res.csvData = csvData;
  let downLoadPath = path.join(__dirname, '../public', 'csvReport.csv')
  fs.writeFileSync(downLoadPath, csvData);
}

  next();
};

module.exports = convertToCsv;




