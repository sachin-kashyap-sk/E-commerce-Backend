const mongoose = require("mongoose");

const ContactUserMessageSchema = new mongoose.Schema({
  headerText: { type: String, require: true, unique: true },
  msg: { type: String, require: true, unique: true },
  subMsg: { type: String, require: true, unique: true },
});

module.exports = mongoose.model("ContactUserMessage", ContactUserMessageSchema);
