const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const wrapAsync = require('../util/wrapAsync.js');
const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
    failureRedirect: "/login/failed"
}));

router.get("/login/failed", authController.loginFailed);
router.get("/login/success", authController.loginSuccessfull);
router.get("/logout", authController.logout);

module.exports = router;
