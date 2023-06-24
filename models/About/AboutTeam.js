const mongoose = require("mongoose");

const AboutTeamSchema = new mongoose.Schema({
  profile: { type: String, require: true, unique: true },
  name: { type: String, require: true, unique: true },
  designation: { type: String, require: true, unique: true },
});
module.exports = mongoose.model("AboutTeam", AboutTeamSchema);
