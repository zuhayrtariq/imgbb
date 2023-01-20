const express = require('express');
const cors = require('cors');
const imgbbUploader = require('imgbb-uploader');
const app = express();
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/data', function (req, res) {
  res.send('I am working!!!!');
});
app.listen(3000);
