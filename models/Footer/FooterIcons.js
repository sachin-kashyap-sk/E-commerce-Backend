const mongoose = require("mongoose");

const FooterIconSchema = new mongoose.Schema({
  footerIcon: [
    {
      image: { type: String, require: true, unique: true },
      title: { type: String, require: true, unique: true },
    },
  ],
});
module.exports = mongoose.model("FooterIcon", FooterIconSchema);
