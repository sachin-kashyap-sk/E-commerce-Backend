const express = require("express");
const router = express.Router();
const authController = require("../../controllers/userAuthController/authController");
const userController = require("../../controllers/userAuthController/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../../controllers/userAuthController/verifyToken");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.put(
  "/updateByIdUser/:id",
  verifyTokenAndAuthorization,
  userController.UpdatedUser
);
router.delete(
  "/deleteByIdUser/:id",
  verifyTokenAndAuthorization,
  userController.DeleteUser
);

router.get("/getByIdUser/:id", verifyTokenAndAdmin, userController.GetUser);
router.get("/getAllUser", verifyTokenAndAdmin, userController.GetAll);
module.exports = router;
