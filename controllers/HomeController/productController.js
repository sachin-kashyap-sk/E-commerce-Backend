const Product = require("../../models/Home/Products");
const cloudinary = require("../../Cloud/Cloudinary");
const convertBufferToString = require("../../Cloud/ConvertBufferToString");
const AddProduct = async (req, res) => {
  try {
    const savedProduct = await Product.create(req.body);
    return res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
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
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("Product Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllProduct = async (req, res) => {
  const query = req.query.new;

  try {
    const product = query
      ? await Product.find().sort({ _id: -1 }).limit(5)
      : await Product.find();
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

const SearchProductTitle = async (req, res) => {
  const queryTitle = new RegExp(req.params?.title, "i");
  if (queryTitle !== "") {
    try {
      const searchResult = await Product.find({ title: queryTitle });
      return res.status(200).json(searchResult);
    } catch (err) {
      res.status(404).json({ message: "No Matched Title Found" });
    }
  } else {
    res.status(404).json({ message: "No Query Title" });
  }
};

const ImageUpload = async (req, res) => {
  try {
    const imageContent = await convertBufferToString(
      req.file.originalname,
      req.file.buffer
    );

    const imageResponse = await cloudinary.uploader.upload(imageContent);
    const imageUrl = imageResponse.secure_url;

    return res.status(201).json({ statusCode: 201, data: imageUrl });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ statusCode: 500, message: "Server Error" });
  }
};

const desImageUpload = async (req, res) => {
  try {
    const imageContent = await convertBufferToString(
      req.file.originalname,
      req.file.buffer
    );

    const imageResponse = await cloudinary.uploader.upload(imageContent);
    const imageUrl = imageResponse.secure_url;

    return res.status(201).json({ statusCode: 201, data: imageUrl });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ statusCode: 500, message: "Server Error" });
  }
};

module.exports = {
  AddProduct,
  UpdatedProduct,
  DeleteProduct,
  GetProduct,
  GetAllProduct,
  SearchProductTitle,
  ImageUpload,
  desImageUpload,
};
