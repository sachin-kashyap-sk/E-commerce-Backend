const BestSeller = require("../../models/BestSeller/BestSeller");
const AddBestProduct = async (req, res) => {
  try {
    const savedProduct = await BestSeller.create(req.body);
    return res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedBestProduct = async (req, res) => {
  try {
    const updatedProduct = await BestSeller.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteProduct = async (req, res) => {
  try {
    await BestSeller.findByIdAndDelete(req.params.id);
    return res.status(200).json("Product Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetBestProduct = async (req, res) => {
  try {
    const product = await BestSeller.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllBestProduct = async (req, res) => {
  const query = req.query.new;
  try {
    const product = query
      ? await BestSeller.find().sort({ _id: -1 }).limit(5)
      : await BestSeller.find();
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddBestProduct,
  UpdatedBestProduct,
  DeleteProduct,
  GetBestProduct,
  GetAllBestProduct,
};
