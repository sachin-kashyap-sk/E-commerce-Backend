const mongoose = require("mongoose");

const ContactQueriesSchema = new mongoose.Schema({
  title: { type: String, require: true },
  subTitle: { type: String, require: true },
});

module.exports = mongoose.model("ContactQueries", ContactQueriesSchema);
