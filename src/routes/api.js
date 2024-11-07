const express = require("express");

const router = express.Router();

// phone upload controller
const phoneController = require("../controllers/phoneController");

// phone related api

router.post("/upload/phone-numbers", phoneController.phoneNumberUpload);
router.put("/update-phone-number/:id", phoneController.phoneNumberUpdate);
router.delete("/delete-phone-number/:id", phoneController.phoneNumberDelete);
router.get("/all-phone-number", phoneController.phoneNumberList);
router.get("/single-phone-number/:id", phoneController.phoneNumberById)



module.exports = router;