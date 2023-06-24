const express = require("express");
const router = express.Router();

const ContactQueriesController = require("../../controllers/ContactUs/ContactQueriesController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post(
  "/addContactQueries",
  verifyTokenAndAdmin,
  ContactQueriesController.AddContactQueries
);

router.post(
  "/updateContactQueries/:id",
  verifyTokenAndAdmin,
  ContactQueriesController.UpdatedContactQueries
);

router.get(
  "/getByIdContactQueries/:id",
  verifyToken,
  ContactQueriesController.GetContactQueries
);

router.get(
  "/getAllContactQueries",
  verifyToken,
  ContactQueriesController.GetAllContactQueries
);

router.delete(
  "/deleteByIdContactQueries/:id",
  verifyTokenAndAdmin,
  ContactQueriesController.DeleteContactQueries
);

module.exports = router;
