const express = require('express');
const cors = require('cors');
const imgbbUploader = require('imgbb-uploader');
const app = express();
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.post('/data', function (req, res) {
  res.send(req.body);
});
app.listen(3000);
