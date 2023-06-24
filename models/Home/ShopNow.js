const mongoose = require("mongoose");

const ShopNowSchema = new mongoose.Schema({
  image: { type: String, require: true, unique: true },
  title: { type: String, require: true },
});

module.exports = mongoose.model("ShopNow", ShopNowSchema);
