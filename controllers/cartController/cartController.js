const Cart = require("../../models/Cart");

const AddToCart = async (req, res) => {
  try {
    const savedCart = await Cart.create(req.body);
    return res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    return res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    return res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddToCart,
  UpdatedCart,
  DeleteCart,
  GetById,
  GetAllCart,
};
