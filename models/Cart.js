const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
        image: { type: String, require: true },
        title: { type: String, require: true, unique: true },
        price: { type: Number, require: true },
        description: { type: String, require: true },
      },
    ],
  },
  { timestamps: true } // for created at and updated at
);
module.exports = mongoose.model("Cart", CartSchema);
