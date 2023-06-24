const express = require("express");
const router = express.Router();
const headerController = require("../../controllers/HomeController/headerController");
const {
  verifyTokenAndAdmin,
} = require("../../controllers/userAuthController/verifyToken");

router.post("/addHeader", verifyTokenAndAdmin, headerController.AddHeader);
router.post(
  "/updateHeader/:id",
  verifyTokenAndAdmin,
  headerController.UpdatedHeader
);

router.delete(
  "/deleteById/:id",
  verifyTokenAndAdmin,
  headerController.DeleteHeader
);

router.get("/getAllHeader", headerController.GetHeader);

router.get("/getByIdHeader/:id", headerController.GetHeaderById);

module.exports = router;
