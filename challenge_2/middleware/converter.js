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
    console.log('---------DATAOBJ------', dataObj)
    console.log('TYPEOF DATAOBJ: ', typeof dataObj);
    for (const key in dataObj) {
      if (key !== 'children') {
        keySet.add(key);
      }
    }
    //check base case
    console.log('DATAOBJ: ', dataObj);
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

  console.log('*****data**** ', req.body.input_json);
  getColumns(JSON.parse(req.body.input_json));  //TODO replace with correct argument
  getValues(JSON.parse(req.body.input_json)); //TODO replace
  console.log(csvRows);
}

  next();
};

module.exports = convertToCsv;




