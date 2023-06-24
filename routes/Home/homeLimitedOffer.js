const express = require("express");
const router = express.Router();

const limitedTimeOfferController = require("../../controllers/HomeController/LimitedTimeOfferController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addLimitedOfferHome",
  verifyTokenAndAdmin,
  limitedTimeOfferController.AddLimitedTimeOffer
);

router.post(
  "/updateLimitedTimeOfferHome/:id",
  verifyTokenAndAdmin,
  limitedTimeOfferController.UpdatedLimitedTimeOffer
);

router.delete(
  "/deleteLimitedTimeOfferHome/:id",
  verifyTokenAndAdmin,
  limitedTimeOfferController.DeleteLimitedTimeOffer
);

router.get(
  "/getByIdLimitedOffer/:id",
  verifyTokenAndAdmin,
  limitedTimeOfferController.GetOffer
);

router.get(
  "/getAllLimitedOffer",
  verifyToken,
  limitedTimeOfferController.GetAllOffer
);

module.exports = router;
