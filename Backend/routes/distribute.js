const express = require("express");
const router = express.Router();
const distributeController = require("../controllers/distribute.js");
const wrapAsync = require("../util/wrapAsync.js");
const {isLoggedIn} = require("../middleware.js");

router.route("/")
    .post(isLoggedIn, wrapAsync(distributeController.addDistribute))
    .get(isLoggedIn, wrapAsync(distributeController.getDistribute));

router.route("/:dcid/:id")
    .put(isLoggedIn, wrapAsync(distributeController.editDistribute))
    .delete(isLoggedIn, wrapAsync(distributeController.deleteDistribute));

module.exports = router;