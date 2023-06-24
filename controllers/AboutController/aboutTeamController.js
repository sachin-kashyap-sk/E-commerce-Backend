const AboutTeam = require("../../models/About/AboutTeam");

const AddAboutTeam = async (req, res) => {
  try {
    const saved = await AboutTeam.create(req.body);
    return res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedAboutTeam = async (req, res) => {
  try {
    const updatedTeam = await AboutTeam.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedTeam);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteAboutTeam = async (req, res) => {
  try {
    await AboutTeam.findByIdAndDelete(req.params.id);
    return res.status(200).json("Data Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAboutTeamById = async (req, res) => {
  try {
    const header = await AboutTeam.findById(req.params.id);
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllAboutTeam = async (req, res) => {
  const query = req.query.new;
  try {
    const header = query
      ? await AboutTeam.find().sort({ _id: -1 }).limit(5)
      : await AboutTeam.find();
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddAboutTeam,
  UpdatedAboutTeam,
  GetAboutTeamById,
  GetAllAboutTeam,
  DeleteAboutTeam,
};
