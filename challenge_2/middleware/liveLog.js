let liveLogger = function(req, res, next) {

  console.log('Incoming Request:');
  console.log('Method :', req.method, ' --> URL: ', req.url);
  console.log('Body ', req.body);

  next();
};

module.exports = liveLogger;


