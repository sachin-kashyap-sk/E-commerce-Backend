const mongoose = require("mongoose");

const AboutHeaderSchema = new mongoose.Schema({
  image: { type: String, require: true },
});

module.exports = mongoose.model("AboutHeader", AboutHeaderSchema);
