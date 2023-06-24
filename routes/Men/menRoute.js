const express = require("express");
const router = express.Router();

const menController = require("../../controllers/MenController/MenController");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../../controllers/userAuthController/verifyToken");

router.post("/addMenProduct", verifyTokenAndAdmin, menController.AddMen);
router.post(
  "/updateMenProduct/:id",
  verifyTokenAndAdmin,
  menController.UpdatedMen
);

router.delete(
  "/deleteByIdMen/:id",
  verifyTokenAndAdmin,
  menController.DeleteMen
);
router.get("/getByIdMen/:id", verifyToken, menController.GetMen);

router.get("/getAllMenProduct", verifyToken, menController.GetAllMen);

router.get("/searchMenTitle/:title", menController.SearchMenTitle);

module.exports = router;
