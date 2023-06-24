const FooterIcon = require("../../models/Footer/FooterIcons");

const AddFooterIcon = async (req, res) => {
  try {
    const savedIcon = await FooterIcon.create(req.body);
    return res.status(200).json(savedIcon);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedFooterIcon = async (req, res) => {
  try {
    const updatedFooterIcon = await FooterIcon.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedFooterIcon);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteFooterIcon = async (req, res) => {
  try {
    await FooterIcon.findByIdAndDelete(req.params.id);
    return res.status(200).json("Icon Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetFooterIcon = async (req, res) => {
  try {
    const icon = await FooterIcon.findById(req.params.id);
    return res.status(200).json(icon);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllIcon = async (req, res) => {
  const query = req.query.new;
  try {
    const footerGet = query
      ? await FooterIcon.find().sort({ _id: -1 }).limit(5)
      : await FooterIcon.find();
    return res.status(200).json(footerGet);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddFooterIcon,
  UpdatedFooterIcon,
  DeleteFooterIcon,
  GetFooterIcon,
  GetAllIcon,
};
