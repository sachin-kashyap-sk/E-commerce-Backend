const express = require("express");
const router = express.Router();

const AboutFewController = require("../../controllers/AboutController/aboutFewWordsController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post("/addFewWord", verifyTokenAndAdmin, AboutFewController.AddAboutFew);
router.post(
  "/updateFewWord/:id",
  verifyTokenAndAdmin,
  AboutFewController.UpdatedAboutFew
);
router.get(
  "/getByIdFewWord/:id",
  verifyToken,
  AboutFewController.GetAboutFewById
);

router.get("/getAllFewWord", verifyToken, AboutFewController.GetAllAboutFew);

router.delete(
  "/deleteByIdFewWord/:id",
  verifyTokenAndAdmin,
  AboutFewController.DeleteAboutFew
);

module.exports = router;
