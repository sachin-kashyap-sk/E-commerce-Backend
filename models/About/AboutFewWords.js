const mongoose = require("mongoose");

const AboutFewWordsSchema = new mongoose.Schema({
  fewWords: { type: String, require: true },
  ourTeam: { type: String, require: true },
  mainTitle: { type: String, require: true },
});

module.exports = mongoose.model("AboutFewWords", AboutFewWordsSchema);
