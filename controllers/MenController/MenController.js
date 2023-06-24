const Men = require("../../models/Men/Men");
const AddMen = async (req, res) => {
  try {
    const savedMen = await Men.create(req.body);
    return res.status(200).json(savedMen);
  } catch (err) {
    res.status(500).json(err);
  }
};
  
const UpdatedMen = async (req, res) => {
  try {
    const updatedMen = await Men.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedMen);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteMen = async (req, res) => {
  try {
    await Men.findByIdAndDelete(req.params.id);
    return res.status(200).json("Product Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetMen = async (req, res) => {
  try {
    const men = await Men.findById(req.params.id);
    return res.status(200).json(men);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllMen = async (req, res) => {
  const query = req.query.new;
  try {
    const men = query
      ? await Men.find().sort({ _id: -1 }).limit(5)
      : await Men.find();
    return res.status(200).json(men);
  } catch (err) {
    res.status(500).json(err);
  }
};

const SearchMenTitle = async (req, res) => {
  const queryTitle = new RegExp(req.params?.title, "i");
  if (queryTitle !== "") {
    try {
      const searchResult = await Men.find({ title: queryTitle });
      return res.status(200).json(searchResult);
    } catch (err) {
      res.status(404).json({ message: "No Matched Title Found" });
    }
  } else {
    res.status(404).json({ message: "No Query Title" });
  }
};

module.exports = {
  AddMen,
  UpdatedMen,
  DeleteMen,
  GetMen,
  GetAllMen,
  SearchMenTitle,
};
