const Women = require("../../models/Women/Women");
const AddWomen = async (req, res) => {
  try {
    const savedWomen = await Women.create(req.body);
    return res.status(200).json(savedWomen);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedWomen = async (req, res) => {
  try {
    const updatedWomen = await Women.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedWomen);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteWomen = async (req, res) => {
  try {
    await Women.findByIdAndDelete(req.params.id);
    return res.status(200).json("Women Product Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetWomen = async (req, res) => {
  try {
    const women = await Women.findById(req.params.id);
    return res.status(200).json(women);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllWomen = async (req, res) => {
  const query = req.query.new;
  try {
    const women = query
      ? await Women.find().sort({ _id: -1 }).limit(5)
      : await Women.find();
    return res.status(200).json(women);
  } catch (err) {
    res.status(500).json(err);
  }
};

const SearchWomenTitle = async (req, res) => {
  const queryTitle = new RegExp(req.params?.title, "i");
  if (queryTitle !== "") {
    try {
      const searchResult = await Women.find({ title: queryTitle });
      return res.status(200).json(searchResult);
    } catch (err) {
      res.status(404).json({ message: "No Matched Title Found" });
    }
  } else {
    res.status(404).json({ message: "No Query Title" });
  }
};

module.exports = {
  AddWomen,
  UpdatedWomen,
  DeleteWomen,
  GetWomen,
  GetAllWomen,
  SearchWomenTitle,
};
