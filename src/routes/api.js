const express = require("express");

const router = express.Router();

// phone upload controller
const phoneController = require("../controllers/phoneController");

// phone related api

router.post("/upload/phone-numbers", phoneController.phoneNumberUpload);



module.exports = router;