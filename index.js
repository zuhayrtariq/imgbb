const express = require('express');
const cors = require('cors');
const imgbbUploader = require('imgbb-uploader');
const myParser = require('body-parser');
const app = express();
app.use(cors());
// app.use(express.json());

app.use(express.json({ limit: '200mb' }));
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.post('/data', async (req, res) => {
  let imageurl;
  let imagearray = ['hi'];
  let i = 0;
  for (i = 0; i < Object.keys(req.body).length; i++) {
    let images = JSON.stringify(req.body[i]);
    images = images.toString();
    images = images.replace('data:image/png;base64,', '');
    images = images.replace('data:image/jpg;base64,', '');
    images = images.replace('data:image/jpeg;base64,', '');

    images = images.slice(0, -1);
    images = images.substring(1);
    //  console.log(images);

    await imgbbUploader({
      apiKey: '9bcc8c2fe8bb1ca258a333b18fd93519',
      base64string: images,
    })
      .then((response) => {
        imageurl = JSON.stringify(response.url);
        console.log(imageurl);
        imagearray[i] = imageurl;
        // res.send(imagearray[i]);
      })
      .catch((error) => console.error(error));
    //  console.log(images);
  }
  console.log(imagearray[0]);
  res.send(imagearray);
});
app.listen(3000);
