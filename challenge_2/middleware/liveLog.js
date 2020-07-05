let liveLogger = function(req, res, next) {

  console.log('Incoming Request:');
  console.log('Method :', req.method, ' --> URL: ', req.url);

  next();
};

module.exports = liveLogger;


