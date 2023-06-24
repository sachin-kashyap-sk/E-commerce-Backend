const express = require("express");
const router = express.Router();

const ContactUserMessageController = require("../../controllers/ContactUs/ContactUserMessageController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addUserMessage",
  verifyTokenAndAdmin,
  ContactUserMessageController.AddUserMessage
);

router.post(
  "/updateUserMessage/:id",
  verifyTokenAndAdmin,
  ContactUserMessageController.UpdatedUserMessage
);

router.get(
  "/getByIdUserMessage/:id",
  verifyToken,
  ContactUserMessageController.GetUserMessage
);

router.get(
  "/getAllUserMessage",
  verifyToken,
  ContactUserMessageController.GetAllUserMessage
);

router.delete(
  "/deleteUserMessage/:id",
  verifyTokenAndAdmin,
  ContactUserMessageController.DeleteUserMessage
);

module.exports = router;
