const express = require("express");
const router = express.Router();

const ContactHeader = require("../../controllers/ContactUs/ContactHeaderController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addContactHeader",
  verifyTokenAndAdmin,
  ContactHeader.AddContactHeader
);

router.post(
  "/updateContactHeader/:id",
  verifyTokenAndAdmin,
  ContactHeader.UpdatedContactHeader
);

router.get("/getByIdContactHeader/:id", verifyToken, ContactHeader.GetContact);

router.get("/getAllContactHeader", verifyToken, ContactHeader.GetAllContact);

router.delete(
  "/deleteByIdContactHeader/:id",
  verifyTokenAndAdmin,
  ContactHeader.DeleteContactHeader
);

module.exports = router;
