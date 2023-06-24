const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController/orderController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../controllers/userAuthController/verifyToken");

router.post("/addOrder", verifyToken, orderController.AddOrder);
router.post("/updateOrder", verifyTokenAndAdmin, orderController.UpdatedOrder);
router.delete("/deleteOrder", verifyTokenAndAdmin, orderController.DeleteOrder);
router.get(
  "/getOderById",
  verifyTokenAndAuthorization,
  orderController.GetOderById
);
router.get("/getAllOrder", verifyTokenAndAdmin, orderController.GetAllOrder);

module.exports = router;
