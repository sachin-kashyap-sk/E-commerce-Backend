const express = require("express");
const router = express.Router();

const productController = require("../../controllers/HomeController/productController");
const {
  verifyTokenAndAdmin,
} = require("../../controllers/userAuthController/verifyToken");
const upload = require("../../Cloud/Multer");
router.post(
  "/addHomeProduct",
  verifyTokenAndAdmin,
  productController.AddProduct
);
router.post(
  "/updateHomeProduct/:id",
  verifyTokenAndAdmin,
  productController.UpdatedProduct
);
router.delete(
  "/deleteHomeProduct/:id",
  // verifyTokenAndAdmin,
  productController.DeleteProduct
);

router.get("/getByIdHomeProduct/:id", productController.GetProduct);
router.get("/getAllHomeProduct", productController.GetAllProduct);
router.get("/searchProduct/:title", productController.SearchProductTitle);
router.post("/files", upload.single("file"), productController.ImageUpload);
router.post(
  "/filesDes",
  upload.single("file"),
  productController.desImageUpload
);

module.exports = router;
