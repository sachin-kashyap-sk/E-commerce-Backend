const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  image: { type: String, require: true, unique: true },
});

module.exports = mongoose.model("Brand", BrandSchema);
