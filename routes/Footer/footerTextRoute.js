const express = require("express");
const router = express.Router();

const footerTextController = require("../../controllers/footerController/footerTextController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addFooterText",
  verifyTokenAndAdmin,
  footerTextController.AddFooterText
);

router.post(
  "/updateFooterText/:id",
  verifyTokenAndAdmin,
  footerTextController.UpdatedFooterText
);

router.delete(
  "/deleteByIdFooterText/:id",
  verifyTokenAndAdmin,
  footerTextController.DeleteFooterText
);

router.get(
  "/getByIdFooterText/:id",
  verifyTokenAndAdmin,
  footerTextController.GetFooterText
);

router.get(
  "/getAllFooterText",
  verifyToken,
  footerTextController.GetAllFooterText
);

module.exports = router;
