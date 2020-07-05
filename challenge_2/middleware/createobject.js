let createObj = function(req, res, next) {
  console.log('CO: ', Object.keys(req.body));

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