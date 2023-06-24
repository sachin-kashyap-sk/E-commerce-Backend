const express = require("express");
const router = express.Router();

const brandController = require("../../controllers/HomeController/brandsController");
const {
  verifyTokenAndAdmin,
} = require("../../controllers/userAuthController/verifyToken");

router.post("/addBrand", verifyTokenAndAdmin, brandController.AddBrand);
router.post(
  "/updateHomeBrand/:id",
  verifyTokenAndAdmin,
  brandController.UpdatedBrand
);
router.delete(
  "/deleteByIdHomeBrand/:id",
  verifyTokenAndAdmin,
  brandController.DeleteBrand
);

router.get(
  "/getByIdHomeBrand/:id",
  verifyTokenAndAdmin,
  brandController.GetBrand
);
router.get("/getAllBrand", brandController.GetAllBrand);
module.exports = router;
