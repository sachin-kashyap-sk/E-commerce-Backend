const express = require("express");
const router = express.Router();

const AboutWeAreController = require("../../controllers/AboutController/aboutWeAreController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addAboutWeAre",
  verifyTokenAndAdmin,
  AboutWeAreController.AddAboutWeAre
);

router.post(
  "/updateAboutWeAre/:id",
  verifyTokenAndAdmin,
  AboutWeAreController.UpdatedAboutWeAre
);

router.get(
  "/getByIdAboutWeAre/:id",
  verifyToken,
  AboutWeAreController.UpdatedAboutWeAre
);

router.get(
  "/getAllAboutWeAre",
  verifyToken,
  AboutWeAreController.GetAllAboutWeAre
);

router.delete(
  "/deleteByIdAboutWeAre/:id",
  verifyTokenAndAdmin,
  AboutWeAreController.DeleteAboutWeAre
);

module.exports = router;
