const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/airbnb', { useNewUrlParser: true })
  .then(() => console.log('MONGO CONNECTED'))
  .catch(() => console.log('MONGO NOT CONNECTED'));

const schema = mongoose.Schema({
  Listing: String,
  Reviews: [{
    Image: String,
    Username: String,
    DateTime: String,
    Body: String,
    Score: Number,
  }],
  Rating: [{
    Cleanliness: Number,
    Accuracy: Number,
    Communication: Number,
    Location: Number,
    Checkin: Number,
    Value: Number,
  }],
});

const Review = mongoose.model('Review', schema);

module.exports = { Review };
