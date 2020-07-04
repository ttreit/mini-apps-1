const express = require('express');
const http = require('http');
const path = require('path');
const bodyparser = require('body-parser');
const liveLog = require('./middleware/liveLog');


const app = express();
const port = process.env.port || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(liveLog);

app.get('/', (req, res) => {
  let options = {
    root: path.join(__dirname, 'public')
  }
  res.sendFile('./index.html', options);
});

app.post('/', (req, res) => {
  let options = {
    root: path.join(__dirname, 'public')
  }
  res.status(200).sendFile('./index.html', options);
});

app.get('/styles/main.css', (req, res) => {
  let options = {
    root: path.join(__dirname, 'public', 'styles')
  }
  res.sendFile('./main.css', options);
});



app.listen(port, () => console.log(`Server up and running on port ${port}`));

