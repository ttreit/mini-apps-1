const testData = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "test": 'TEST',  //remove this
    "firstName": "Beth Jr.",
    // "lastName": "Johnson",
    // "county": "San Mateo",
    // "city": "Pacifica",
    // "role": "Manager",
    // "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "TREASURE": "test value",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "SIBLING": "sibling",
    "sales": 7500000,
    "children": []
  }
]
}

const testData2 = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": []
  }

let convertToCsv = function(req, res, next){
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

  getColumns(testData);  //TODO replace with correct argument
  getValues(testData); //TODO replace

  console.log(csvRows);

};

convertToCsv();


module.exports = convertToCsv;



  // keySet.add('firstName');
  // keySet.add('lastName');
  // console.log('*** keySet' ,keySet);
  //const row1 = Object.keys(testData);

  //create array to hold strings
  //hookup test data (DEV ONLY)
  //get keys for first line of csv
  //NOTE: Child objects may have different properties - deal with this at the end if time simple solution first
      //add commas between each
      //add to array[0] (write to file maybe?);
    //get values for all other lines
    //add to array[1 ff]
    //construct string to return
      //array item 1 - arraylength -1 (fifo)
      //each item on it's own line
  //next();  TODO uncomment after testing done
