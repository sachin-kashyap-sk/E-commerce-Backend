const ShopNow = require("../../models/Home/ShopNow");
const AddShopNow = async (req, res) => {
  try {
    const savedProduct = await ShopNow.create(req.body);
    return res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedShopNow = async (req, res) => {
  try {
    const updatedProduct = await ShopNow.findByIdAndUpdate(
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

const DeleteShopNow = async (req, res) => {
  try {
    await ShopNow.findByIdAndDelete(req.params.id);
    return res.status(200).json("Shop now Product Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetShopNow = async (req, res) => {
  try {
    const product = await ShopNow.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllShopNow = async (req, res) => {
  const query = req.query.new;
  try {
    const product = query
      ? await ShopNow.find().sort({ _id: -1 }).limit(5)
      : await ShopNow.find();
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  AddShopNow,
  UpdatedShopNow,
  DeleteShopNow,
  GetShopNow,
  GetAllShopNow,
};
