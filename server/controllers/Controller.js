const { Review } = require('../../database/index.js');



exports.getReviews = async (req, res) => {
  console.log("made it controller")
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews)

  } catch {
    res.status(400).send({ error: "Failed to get Reviews" })
  }
}

exports.postReviews = async (req, res) => {
  try {
    const review = new Review(req.body)
    await review.save();
    res.send(review)
  } catch {
    res.status(400).send({ error: "Failed to post Review" })
  }
}