const mongoose = require("mongoose");

const AboutWeAreSchema = new mongoose.Schema({
  title: { type: String, require: true, unique: true },
  subTitle: { type: String, require: true, unique: true },
  weAreImage: { type: String, require: true },
});
module.exports = mongoose.model("AboutWeAre", AboutWeAreSchema);
