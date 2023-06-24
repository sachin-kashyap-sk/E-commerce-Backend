const Contact = require("../../models/ContactUs/ContactUs");

const AddContactHeader = async (req, res) => {
  try {
    const savedIcon = await Contact.create(req.body);
    return res.status(200).json(savedIcon);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedContactHeader = async (req, res) => {
  try {
    const updatedContactHeader = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedContactHeader);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteContactHeader = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    return res.status(200).json("Contact Header Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetContact = async (req, res) => {
  try {
    const icon = await Contact.findById(req.params.id);
    return res.status(200).json(icon);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllContact = async (req, res) => {
  const query = req.query.new;
  try {
    const contactGet = query
      ? await Contact.find().sort({ _id: -1 }).limit(5)
      : await Contact.find();
    return res.status(200).json(contactGet);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddContactHeader,
  UpdatedContactHeader,
  GetContact,
  GetAllContact,
  DeleteContactHeader,
};
