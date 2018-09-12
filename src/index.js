const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const controller_uno = require('./controllers/preducts');
const controller_y_dos = require('./controllers/types');

mongoose.connect('mongodb://stock-db/stock');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  reject(new Error('Something went wrong!, err:' + err));
  res.status(500).send('Something went wrong!');
});
controller_uno(app);
controller_y_dos(app);
app.listen(3000, () => console.log('Example app listening on port 3000!'));
