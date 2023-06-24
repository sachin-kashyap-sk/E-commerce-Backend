const express = require("express");
const router = express.Router();

const cartController = require("../../controllers/cartController/cartController");
const {
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post("/addToCart", verifyToken, cartController.AddToCart);

router.post("/updateToCart/:id", verifyToken, cartController.UpdatedCart);

router.delete("/deleteFromCart/:id", verifyToken, cartController.DeleteCart);

router.get("/getByIdCart/:id", verifyToken, cartController.GetById);

router.get("/getAllCart", verifyToken, cartController.GetAllCart);
module.exports = router;
