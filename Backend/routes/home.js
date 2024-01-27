const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.js");
const wrapAsync = require("../util/wrapAsync.js");


router.route("/")
    .get(wrapAsync(homeController.getDebcred));

module.exports = router;