const express = require("express");
const router = express.Router();
const manageController = require("../controllers/manage.js");

router.route("/")
    .get(manageController.getManage)
    .post(manageController.addManage);

router.route("/:id")
    .put(manageController.editManage)
    .delete(manageController.deleteManage);

module.exports = router;
