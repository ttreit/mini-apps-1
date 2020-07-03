const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.port || 3500;

app.get('/', (req, res) => {
  let options = {
    root: path.join(__dirname, 'public')
  }
  res.sendFile('./index.html', options);
});

app.post('/', (req, res) => {

});

app.listen(port, () => console.log(`Server up and running on port ${port}`));

