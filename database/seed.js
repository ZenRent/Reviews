const { Review, db } = require('./index.js');
var faker = require('faker');
let DateGenerator = require('random-date-generator');

function randomDate(start, end) {
  var date = new Date(+start + Math.random() * (end - start));
  return date;
}
let startDate = new Date(2019, 2, 2);
let endDate = new Date(2021, 1, 10);
console.log(DateGenerator.getRandomDateInRange(startDate, endDate))


var fakeAddressesArr = []

for (var j = 0; j < 2; j++) {
  let address = faker.address.streetAddress();
  fakeAddressesArr.push(address)
}
// console.log("fakeAddressesArr", fakeAddressesArr)

fakeReviewArr = []

for (var i = 0; i < 4; i++) {
  var reviewObj = [{
    Image: faker.image.image(),
    Username: faker.internet.userName(),
    DateTime: DateGenerator.getRandomDateInRange(startDate, endDate),
    Body: faker.lorem.paragraph(),
  }];
  fakeReviewArr.push(reviewObj)
}
// console.log("fakeReviewArr", fakeReviewArr)

fakeAddressesArr.forEach((currentAddress) => {
  fakeReviewArr.forEach((currentReview) => {
    var dataObj = {
      Listing: currentAddress,
      Reviews: currentReview,
      Rating: {
        Cleanliness: Math.floor(Math.random() * 5) + 1,
        Accuracy: Math.floor(Math.random() * 5) + 1,
        Communication: Math.floor(Math.random() * 5) + 1,
        Location: Math.floor(Math.random() * 5) + 1,
        Checkin: Math.floor(Math.random() * 5) + 1,
        Value: Math.floor(Math.random() * 5) + 1
      }
    }
    Review.create(dataObj)
    console.log("FinalObject!", dataObj)
  })
})





// const exampleData = [
//   { Listing: "test", Reviews: fakeReviewArr }]

// console.log("exampleData", exampleData)



// const insertData = function () {

//   Review.create(finalArray)

// };

// insertData();



// var ratingsArr = []
// for (var i = 0; i < 4; i++) {
//   var obj = {}
//   obj.Listing = fakeaddresses[k]
//   // var addys = { Listing: currentAddress }
//   var ratingObj = [{
//     accuracy: Math.floor(Math.random() * 5) + 1,
//     cleanliness: Math.floor(Math.random() * 5) + 1,
//     communication: Math.floor(Math.random() * 5) + 1
//   }];
//   ratingsArr.push(ratingObj)
//   // fakeReviewArr.push(addys)
// }








