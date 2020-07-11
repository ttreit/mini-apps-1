//Require
const express = require('express');
const path = require('path');

//Server Setup
const port = process.env.port || 3300;
const app = express();

//app.use(express.static('../../compiled/challenge_3/public'))
//app.use(express.static('public'))
//app.use(express.static('testfolder'))

//Routes
app.get('/', function(req, res){
  const options = {
    root: path.join(__dirname, 'public')
  }
  res.sendFile('./index.html', options);

})



//Invoke Server
app.listen(port, () => console.log(`Server up and listening on ${port}` ));

