const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
