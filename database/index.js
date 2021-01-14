const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1/airbnb', { useNewUrlParser: true })
  .then(() => console.log("MONGO CONNECTED"))
  .catch(() => console.log("MONGO NOT CONNECTED"))


//OPTION 1
const schema = mongoose.Schema({
  Listing: String,
  Reviews: [{
    Image: String,
    Username: String,
    DateTime: String,
    Body: String,
    Score: Number
  }],
  Rating: [{
    Cleanliness: Number,
    Accuracy: Number,
    Communication: Number,
    Location: Number,
    Checkin: Number,
    Value: Number
  }]
})

//reviews is a many to one relationship with listing. Push the designated random # of review properties to Reviews.

const Review = mongoose.model('Review', schema)


module.exports = { Review, db }




// var faker = require('faker');

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email();

// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// // outputs: "Marks, Dean Sr."

// const insertData = function () {
//   Review.create(samplePosts)
//     .then(() => db.disconnect());
// };

// insertData();



//OPTION 2 Schema.types.objectID possible problem
//Test the following
//Schema.Types.ListingId


// const listingSchema = Schema({
//   ListingId: String,
//   reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
// });

// const reviewSchema = Schema({
//   image: String,
//   Username: String,
//   Date: String,
//   Body: String
// });