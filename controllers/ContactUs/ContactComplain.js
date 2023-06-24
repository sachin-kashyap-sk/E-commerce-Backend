const ContactComplain = require("../../models/ContactUs/ContactComplain");

const AddContactComplain = async (req, res) => {
  try {
    const savedQueries = await ContactComplain.create(req.body);
    return res.status(200).json(savedQueries);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedContactComplain = async (req, res) => {
  try {
    const UpdatedContactComplain = await ContactComplain.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(UpdatedContactComplain);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteContactComplain = async (req, res) => {
  try {
    await ContactComplain.findByIdAndDelete(req.params.id);
    return res.status(200).json("Contact Complain Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetContactComplain = async (req, res) => {
  try {
    const contact = await ContactComplain.findById(req.params.id);
    return res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllContactComplain = async (req, res) => {
  const query = req.query.new;
  try {
    const contactComplain = query
      ? await ContactComplain.find().sort({ _id: -1 }).limit(5)
      : await ContactComplain.find();
    return res.status(200).json(contactComplain);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddContactComplain,
  UpdatedContactComplain,
  GetContactComplain,
  GetAllContactComplain,
  DeleteContactComplain,
};
