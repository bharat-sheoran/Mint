const express = require("express");
const router = express.Router();
const manageController = require("../controllers/manage.js");
const wrapAsync = require('../util/wrapAsync.js');

router.route("/")
    .get(wrapAsync(manageController.getManage))
    .post(wrapAsync(manageController.addManage));

router.route("/:dcid/:id")
    .delete(wrapAsync(manageController.deleteManage))
    .put(wrapAsync(manageController.editManage));

module.exports = router;
