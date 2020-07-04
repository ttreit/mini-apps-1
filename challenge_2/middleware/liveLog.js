let liveLogger = function(req, res, next) {

  console.log('Incoming Request:');
  console.log('Method :', req.method, ' --> URL: ', req.url);
  let test = req.body;
  test = JSON.stringify(test);
  console.log(test);

  next();
};

module.exports = liveLogger;
