const express = require("express");
const router = express.Router();

const footerIconController = require("../../controllers/footerController/footerController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addFooterIcon",
  verifyTokenAndAdmin,
  footerIconController.AddFooterIcon
);

router.post(
  "/updateFooterIcon/:id",
  verifyTokenAndAdmin,
  footerIconController.UpdatedFooterIcon
);

router.delete(
  "/deleteByIdFooterIcon/:id",
  verifyTokenAndAdmin,
  footerIconController.DeleteFooterIcon
);

router.get(
  "/getByIdFooterIcon/:id",
  verifyToken,
  footerIconController.GetFooterIcon
);

router.get("/getAllFooterIcon", verifyToken, footerIconController.GetAllIcon);

module.exports = router;
