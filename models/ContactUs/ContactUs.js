const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  image: { type: String, require: true, unique: true },
});

module.exports = mongoose.model("ContactUs", ContactUsSchema);
