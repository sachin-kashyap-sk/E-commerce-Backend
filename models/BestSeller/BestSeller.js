const mongoose = require("mongoose");

const BestSellerSchema = new mongoose.Schema({
  image: { type: String, require: true, unique: true },
  title: { type: String, require: true, unique: true },
  price: { type: String, require: true },
});

module.exports = mongoose.model("BestSeller", BestSellerSchema);
