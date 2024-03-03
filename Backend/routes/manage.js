const express = require("express");
const router = express.Router();
const manageController = require("../controllers/manage.js");
const wrapAsync = require('../util/wrapAsync.js');
const {isLoggedIn} = require("../middleware.js");

router.route("/")
    .get(isLoggedIn, wrapAsync(manageController.getManage))
    .post(isLoggedIn, wrapAsync(manageController.addManage));

router.route("/:dcid/:id")
    .delete(isLoggedIn, wrapAsync(manageController.deleteManage))
    .put(isLoggedIn, wrapAsync(manageController.editManage));

module.exports = router;
