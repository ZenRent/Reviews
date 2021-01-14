const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const ReviewController = require('./controllers/Controller.js');
const path = require('path');
const port = 1000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))


app.get('/reviews', ReviewController.getReviews);
app.post('/reviews', ReviewController.postReviews);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})