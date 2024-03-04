const express = require("express");
const router = express.Router();
const distributeController = require("../controllers/distribute.js");
const wrapAsync = require("../util/wrapAsync.js");
const {isLoggedIn} = require("../middleware.js");

router.route("/")
    .post(wrapAsync(distributeController.addDistribute))
    .get(wrapAsync(distributeController.getDistribute));

router.route("/:dcid/:id")
    .put(wrapAsync(distributeController.editDistribute))
    .delete(wrapAsync(distributeController.deleteDistribute));

module.exports = router;