const express = require("express");
const router = express.Router();

const womenController = require("../../controllers/WomenController/womenController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post("/addWomenProduct", verifyTokenAndAdmin, womenController.AddWomen);
router.post(
  "/updateWomen/:id",
  verifyTokenAndAdmin,
  womenController.UpdatedWomen
);

router.delete("/deleteByIdWomen/:id", womenController.DeleteWomen);

router.get("/getByIdWomenProduct/:id", verifyToken, womenController.GetWomen);

router.get("/getAllWomenProduct", verifyToken, womenController.GetAllWomen);

router.get("/searchWomenTitle/:title", womenController.SearchWomenTitle);

module.exports = router;
