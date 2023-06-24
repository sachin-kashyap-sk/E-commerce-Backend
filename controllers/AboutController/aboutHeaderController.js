const AboutHeader = require("../../models/About/AboutHeader");

const AddAboutHeader = async (req, res) => {
  try {
    const saved = await AboutHeader.create(req.body);
    return res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedAboutHeader = async (req, res) => {
  try {
    const updatedAboutHeader = await AboutHeader.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedAboutHeader);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteAboutHeader = async (req, res) => {
  try {
    await AboutHeader.findByIdAndDelete(req.params.id);
    return res.status(200).json("Header Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAboutHeaderById = async (req, res) => {
  try {
    const header = await AboutHeader.findById(req.params.id);
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllAboutHeader = async (req, res) => {
  const query = req.query.new;
  try {
    const header = query
      ? await AboutHeader.find().sort({ _id: -1 }).limit(5)
      : await AboutHeader.find();
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddAboutHeader,
  GetAboutHeaderById,
  GetAllAboutHeader,
  UpdatedAboutHeader,
  DeleteAboutHeader,
};
