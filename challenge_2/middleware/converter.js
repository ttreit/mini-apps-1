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
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
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
    "sales": 7500000,
    "children": []
  }
]
}

let convertToCsv = function(req, res, next){
  const csvRows = [];
  //Get all keys and put in set
  let parseData = function(dataObj) {
    let keySet = new Set();
    //do the work
    for (key in dataObj) {
      if (key !== 'children') {
        keySet.add(key);
      }
    }
    //check base case
    //move toward base case
    //recurse
    console.log('****KEYSET ', keySet);
  };
  parseData(testData);  //TODO replace with correct argument
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
