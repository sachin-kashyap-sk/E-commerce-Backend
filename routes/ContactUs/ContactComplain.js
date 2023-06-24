const express = require("express");
const router = express.Router();

const ContactComplain = require("../../controllers/ContactUs/ContactComplain");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addComplain",
  verifyTokenAndAdmin,
  ContactComplain.AddContactComplain
);
router.post(
  "/updateContactComplain/:id",
  verifyTokenAndAdmin,
  ContactComplain.UpdatedContactComplain
);

router.get(
  "/getByIdContactComplain/:id",
  verifyToken,
  ContactComplain.GetContactComplain
);

router.get(
  "/getAllComplain",
  verifyToken,
  ContactComplain.GetAllContactComplain
);

router.delete(
  "/deleteByIdContactComplain/:id",
  verifyTokenAndAdmin,
  ContactComplain.DeleteContactComplain
);

module.exports = router;
