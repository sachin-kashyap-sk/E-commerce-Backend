const Order = require("../../models/Order");

const AddOrder = async (req, res) => {
  try {
    const savedOrder = await Order.create(req.body);
    return res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdatedOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order Has Been Deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetOderById = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

const GetAllOrder = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  AddOrder,
  UpdatedOrder,
  DeleteOrder,
  GetOderById,
  GetAllOrder,
};
