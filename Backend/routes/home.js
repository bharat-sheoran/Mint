const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.js");


router.route("/")
    .get(homeController.getDebcred);

module.exports = router;