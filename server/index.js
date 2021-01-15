const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const ReviewController = require('./controllers/Controller.js');

const app = express();
const port = 1000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/reviews', ReviewController.getReviews);
app.post('/reviews', ReviewController.postReviews);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
