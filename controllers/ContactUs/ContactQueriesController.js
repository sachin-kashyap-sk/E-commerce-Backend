const ContactQueries = require("../../models/ContactUs/ContactQueries");

const AddContactQueries = async (req, res) => {
  try {
    const savedQueries = await ContactQueries.create(req.body);
    return res.status(200).json(savedQueries);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedContactQueries = async (req, res) => {
  try {
    const UpdatedContactQueries = await ContactQueries.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(UpdatedContactQueries);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteContactQueries = async (req, res) => {
  try {
    await ContactQueries.findByIdAndDelete(req.params.id);
    return res.status(200).json("Contact Header Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetContactQueries = async (req, res) => {
  try {
    const contact = await ContactQueries.findById(req.params.id);
    return res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllContactQueries = async (req, res) => {
  const query = req.query.new;
  try {
    const contactQueries = query
      ? await ContactQueries.find().sort({ _id: -1 }).limit(5)
      : await ContactQueries.find();
    return res.status(200).json(contactQueries);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddContactQueries,
  UpdatedContactQueries,
  GetContactQueries,
  GetAllContactQueries,
  DeleteContactQueries,
};
