const express = require("express");
const router = express.Router();
const distributeController = require("../controllers/distribute.js");

router.route("/")
    .get(distributeController.getDistribute);

router.route("/:id")
    .delete(distributeController.deleteDistribute);

module.exports = router;