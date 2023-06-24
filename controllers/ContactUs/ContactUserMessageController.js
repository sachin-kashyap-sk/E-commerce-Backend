const ContactUserMessage = require("../../models/ContactUs/ContactUserMessage");

const AddUserMessage = async (req, res) => {
  try {
    const saved = await ContactUserMessage.create(req.body);
    return res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedUserMessage = async (req, res) => {
  try {
    const UpdatedUserMessage = await ContactUserMessage.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(UpdatedUserMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteUserMessage = async (req, res) => {
  try {
    await ContactUserMessage.findByIdAndDelete(req.params.id);
    return res.status(200).json("Contact User Message Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetUserMessage = async (req, res) => {
  try {
    const contact = await ContactUserMessage.findById(req.params.id);
    return res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllUserMessage = async (req, res) => {
  const query = req.query.new;
  try {
    const contactUser = query
      ? await ContactUserMessage.find().sort({ _id: -1 }).limit(5)
      : await ContactUserMessage.find();
    return res.status(200).json(contactUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddUserMessage,
  UpdatedUserMessage,
  GetUserMessage,
  GetAllUserMessage,
  DeleteUserMessage,
};
