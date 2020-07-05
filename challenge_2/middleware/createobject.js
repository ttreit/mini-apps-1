let createObj = function(req, res, next) {
  console.log('Object.keys(req.body): ', Object.keys(req.body));
  if (Object.keys.length === 0) {
    console.log('Object.keys was empty');
    return;
  } else {
    console.log('CO2: ', req.body.input_json); //This one
    if (req.body.input_json === '') {
    } else {
      console.log('TYPEOF: ', typeof req.body.input_json);
    }
    //let result = JSON.parse(req.body.input_json);
    //console.log(result);    //req.csvJson = result;
  }

  next();
};

module.exports = createObj;






// let test = req.body;
// console.log('BODY: ', test);
// let pleasegodletthiswork = JSON.parse(test.input_json);
// console.log(pleasegodletthiswork);




// let body = req.body;
// let jsonObj = JSON.parse(body.input_json);
// req.csvConvert = jsonObj;
// console.log('csvConvert: ', req.csvConvert);




  // if (Object.keys(req.body).length === 0 ) {
  //   return;
  // }
  // let test = req.body;
  // console.log('BODY: ', test);
  // let pleasegodletthiswork = JSON.parse(test.input_json);
  // console.log(pleasegodletthiswork);

  // let test = req.body;
  // console.log('BODY: ', test);
  // let pleasegodletthiswork = JSON.parse(test.input_json);
  // console.log(pleasegodletthiswork);