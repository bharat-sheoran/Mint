const express = require("express");
const router = express.Router();
const manageController = require("../controllers/manage.js");

router.route("/")
    .get(manageController.getManage)
    .post(manageController.addManage);

router.route("/:dcid/:id")
    .delete(manageController.deleteManage)
    .put(manageController.editManage);

module.exports = router;
