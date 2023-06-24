const Header = require("../../models/Home/Header");

const AddHeader = async (req, res) => {
  try {
    const savedProduct = await Header.create(req.body);
    return res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedHeader = async (req, res) => {
  try {
    const updatedHeader = await Header.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedHeader);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteHeader = async (req, res) => {
  try {
    await Header.findByIdAndDelete(req.params.id);
    return res.status(200).json("Header Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetHeaderById = async (req, res) => {
  try {
    const header = await Header.findById(req.params.id);
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetHeader = async (req, res) => {
  const query = req.query.new;
  try {
    const header = query
      ? await Header.find().sort({ _id: -1 }).limit(5)
      : await Header.find();
    return res.status(200).json(header);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddHeader,
  GetHeader,
  UpdatedHeader,
  DeleteHeader,
  GetHeaderById,
};
