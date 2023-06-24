const express = require("express");
const router = express.Router();

const shopNowController = require("../../controllers/HomeController/shopNowController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addHomeShopNow",
  verifyTokenAndAdmin,
  shopNowController.AddShopNow
);
router.post(
  "/updateHomeShopNow/:id",
  verifyTokenAndAdmin,
  shopNowController.UpdatedShopNow
);

router.delete(
  "/deleteByIdHomeShopNow/:id",
  verifyTokenAndAdmin,
  shopNowController.DeleteShopNow
);

router.get(
  "/getByIdHomeShopNow/:id",
  verifyToken,
  shopNowController.GetShopNow
);

router.get("/getAllShopNow", verifyToken, shopNowController.GetAllShopNow);

module.exports = router;
