const FooterText = require("../../models/Footer/FooterText");
const AddFooterText = async (req, res) => {
  try {
    const savedText = await FooterText.create(req.body);
    return res.status(200).json(savedText);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedFooterText = async (req, res) => {
  try {
    const updatedText = await FooterText.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedText);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteFooterText = async (req, res) => {
  try {
    await FooterText.findByIdAndDelete(req.params.id);
    return res.status(200).json("Footer Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetFooterText = async (req, res) => {
  try {
    const text = await FooterText.findById(req.params.id);
    return res.status(200).json(text);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllFooterText = async (req, res) => {
  const query = req.query.new;
  try {
    const allText = query
      ? await FooterText.find().sort({ _id: -1 }).limit(5)
      : await FooterText.find();
    return res.status(200).json(allText);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddFooterText,
  UpdatedFooterText,
  DeleteFooterText,
  GetFooterText,
  GetAllFooterText,
};
