const AboutFewWords = require("../../models/About/AboutFewWords");

const AddAboutFew = async (req, res) => {
  try {
    const saved = await AboutFewWords.create(req.body);
    return res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedAboutFew = async (req, res) => {
  try {
    const updatedAboutFew = await AboutFewWords.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedAboutFew);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteAboutFew = async (req, res) => {
  try {
    await AboutFewWords.findByIdAndDelete(req.params.id);
    return res.status(200).json("Data Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAboutFewById = async (req, res) => {
  try {
    const header = await AboutFewWords.findById(req.params.id);
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllAboutFew = async (req, res) => {
  const query = req.query.new;
  try {
    const header = query
      ? await AboutFewWords.find().sort({ _id: -1 }).limit(5)
      : await AboutFewWords.find();
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddAboutFew,
  UpdatedAboutFew,
  GetAboutFewById,
  GetAllAboutFew,
  DeleteAboutFew,
};
