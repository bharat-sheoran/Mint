const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const wrapAsync = require('../util/wrapAsync.js');
const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/facebook', passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

router.get("/google/callback", passport.authenticate("google", {
  successRedirect: process.env.FRONTEND_URL,
  failureRedirect: "/login/failed"
}));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login/failed' }),
  function (req, res) {
    res.redirect(process.env.FRONTEND_URL);
  });


router.route("/login")
  .post(passport.authenticate('local' ,{failureRedirect: 'auth/login/failed'}), authController.loginSuccessfull);

router.route("/signup")
  .post(authController.signup);

router.get("/login/failed", authController.loginFailed);
router.post("/login/failed", authController.loginFailed);
router.get("/login/success", authController.loginSuccessfull);
router.get("/logout", authController.logout);

module.exports = router;
