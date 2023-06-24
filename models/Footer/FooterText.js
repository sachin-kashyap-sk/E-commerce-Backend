const mongoose = require("mongoose");

const FooterTextSchema = new mongoose.Schema({
  label: { type: String, require: true },
  bestLook: { type: String, require: true },
  forHer: { type: String, require: true },
  optionFirst: { type: String, require: true, unique: true },
  optionSec: { type: String, require: true, unique: true },
  optionThird: { type: String, require: true, unique: true },
  optionForth: { type: String, require: true, unique: true },
  forHim: { type: String, require: true },
  himOptionFirst: { type: String, require: true, unique: true },
  himOptionSec: { type: String, require: true, unique: true },
  himOptionThird: { type: String, require: true, unique: true },
  himOptionForth: { type: String, require: true, unique: true },
  himOptionFifth: { type: String, require: true, unique: true },
  copyRight: { type: String, require: true },
});
module.exports = mongoose.model("FooterText", FooterTextSchema);
