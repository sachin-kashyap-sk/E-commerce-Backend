const Brand = require("../../models/Home/Brands");

const AddBrand = async (req, res) => {
  try {
    const savedBrand = await Brand.create(req.body);
    return res.status(200).json(savedBrand);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedBrand = async (req, res) => {
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedBrand);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteBrand = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    return res.status(200).json("Brand Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    return res.status(200).json(brand);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllBrand = async (req, res) => {
  const query = req.query.new;
  try {
    const brand = query
      ? await Brand.find().sort({ _id: -1 }).limit(5)
      : await Brand.find();
    return res.status(200).json(brand);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddBrand,
  UpdatedBrand,
  DeleteBrand,
  GetBrand,
  GetAllBrand,
};
