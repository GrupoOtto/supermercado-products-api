const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./api');

mongoose.connect(process.env.DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  reject(new Error('Something went wrong!, err:' + err));
  res.status(500).send('Something went wrong!');
});

api(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
