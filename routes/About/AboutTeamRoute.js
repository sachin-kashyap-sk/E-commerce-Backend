const express = require("express");
const router = express.Router();

const AboutTeamController = require("../../controllers/AboutController/aboutTeamController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addAboutTeam",
  verifyTokenAndAdmin,
  AboutTeamController.AddAboutTeam
);

router.post(
  "/updateAboutTeam/:id",
  verifyTokenAndAdmin,
  AboutTeamController.UpdatedAboutTeam
);

router.get(
  "/getByIdAboutTeam/:id",
  verifyToken,
  AboutTeamController.GetAboutTeamById
);

router.get(
  "/getAllAboutTeam",
  verifyToken,
  AboutTeamController.GetAllAboutTeam
);

router.delete(
  "/deleteByIdAboutTeam/:id",
  verifyTokenAndAdmin,
  AboutTeamController.DeleteAboutTeam
);

module.exports = router;
