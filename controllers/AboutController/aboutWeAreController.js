const AboutWeAre = require("../../models/About/AboutWeAre");

const AddAboutWeAre = async (req, res) => {
  try {
    const saved = await AboutWeAre.create(req.body);
    return res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedAboutWeAre = async (req, res) => {
  try {
    const updatedAboutWeAre = await AboutWeAre.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedAboutWeAre);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteAboutWeAre = async (req, res) => {
  try {
    await AboutWeAre.findByIdAndDelete(req.params.id);
    return res.status(200).json("Header Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAboutWeAreById = async (req, res) => {
  try {
    const header = await AboutWeAre.findById(req.params.id);
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllAboutWeAre = async (req, res) => {
  const query = req.query.new;
  try {
    const header = query
      ? await AboutWeAre.find().sort({ _id: -1 }).limit(5)
      : await AboutWeAre.find();
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddAboutWeAre,
  UpdatedAboutWeAre,
  GetAboutWeAreById,
  GetAllAboutWeAre,
  DeleteAboutWeAre,
};
