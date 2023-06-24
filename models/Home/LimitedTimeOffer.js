const mongoose = require("mongoose");

const LimitedTimeOfferSchema = new mongoose.Schema({
  headerTitle: { type: String, require: true },
  title: { type: String, require: true },
  subTitle: { type: String, require: true },
  image: { type: String, require: true, unique: true },
});

module.exports = mongoose.model("Limited Time Offer", LimitedTimeOfferSchema);
