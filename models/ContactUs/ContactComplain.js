const mongoose = require("mongoose");

const ContactComplainSchema = new mongoose.Schema({
  department: { type: String, require: true, unique: true },
  title: { type: String, require: true, unique: true },
  contact: { type: String, require: true, unique: true },
});

module.exports = mongoose.model("ContactComplain", ContactComplainSchema);
