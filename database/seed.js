const faker = require('faker');
const DateGenerator = require('random-date-generator');
const { Review } = require('./index.js');

function randomDate(start, end) {
  const date = new Date(+start + Math.random() * (end - start));
  return date;
}
const startDate = new Date(2019, 2, 2);
const endDate = new Date(2021, 1, 10);
console.log(DateGenerator.getRandomDateInRange(startDate, endDate));

console.log('randomDate', randomDate(startDate, endDate));

const fakeAddressesArr = [];

for (let j = 0; j < 100; j += 1) {
  const address = faker.address.streetAddress();
  fakeAddressesArr.push(address);
}
// console.log("fakeAddressesArr", fakeAddressesArr)

const fakeReviewArr = [];

for (let i = 0; i < 40; i += 1) {
  const reviewObj = [{
    Image: faker.image.image(),
    Username: faker.internet.userName(),
    DateTime: DateGenerator.getRandomDateInRange(startDate, endDate),
    Body: faker.lorem.paragraph(),
  }];

  fakeReviewArr.push(reviewObj);
}
// console.log("fakeReviewArr", fakeReviewArr)

fakeAddressesArr.forEach((currentAddress) => {
  fakeReviewArr.forEach((currentReview) => {
    const dataObj = {
      Listing: currentAddress,
      Reviews: currentReview,
      Rating: {
        Cleanliness: Math.floor(Math.random() * 5) + 1,
        Accuracy: Math.floor(Math.random() * 5) + 1,
        Communication: Math.floor(Math.random() * 5) + 1,
        Location: Math.floor(Math.random() * 5) + 1,
        Checkin: Math.floor(Math.random() * 5) + 1,
        Value: Math.floor(Math.random() * 5) + 1,
      }
    };
    Review.create(dataObj);
    console.log('FinalObject!', dataObj);
  });
});

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
