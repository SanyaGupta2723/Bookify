const express = require("express");
const router = express.Router();
const { sendContactMessage } = require("../controller/contactController");

router.post("/contact", sendContactMessage);

module.exports = router;