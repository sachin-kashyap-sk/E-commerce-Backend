const express = require("express");
const router = express.Router();

const bestSellerController = require("../../controllers/BestSellerController/BestSeller");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addBestProduct",
  verifyTokenAndAdmin,
  bestSellerController.AddBestProduct
);

router.post(
  "/updateBestProduct/:id",
  verifyTokenAndAdmin,
  bestSellerController.UpdatedBestProduct
);

router.delete(
  "/deleteByIdBestProduct/:id",
  verifyTokenAndAdmin,
  bestSellerController.DeleteProduct
);

router.get(
  "/getByIdBestProduct/:id",
  verifyToken,
  bestSellerController.GetBestProduct
);

router.get(
  "/getAllBestProduct",
  verifyToken,
  bestSellerController.GetAllBestProduct
);

module.exports = router;
