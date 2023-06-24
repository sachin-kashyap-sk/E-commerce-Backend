const express = require("express");
const router = express.Router();
const AboutController = require("../../controllers/AboutController/aboutHeaderController");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addAboutHeader",
  verifyTokenAndAdmin,
  AboutController.AddAboutHeader
);

router.post(
  "/updateAboutHeader/:id",
  verifyTokenAndAdmin,
  AboutController.UpdatedAboutHeader
);

router.get(
  "/getByIdAboutHeader/:id",
  verifyTokenAndAuthorization,
  AboutController.GetAboutHeaderById
);

router.get(
  "/getAllAboutHeader",
  verifyToken,
  AboutController.GetAllAboutHeader
);

router.delete(
  "/deleteByIdAboutHeader/:id",
  verifyTokenAndAdmin,
  AboutController.DeleteAboutHeader
);

module.exports = router;
