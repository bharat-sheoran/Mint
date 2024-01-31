const User = require("../models/user.js");
const passport = require("passport");

module.exports.loginFailed = (req, res) => {
    res.status(401).json({
        error: true,
        message: "failure"
    })
}

module.exports.loginSuccessfull = (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user
        })
    } else {
        res.status(403).json({ error: true, message: "User is undefined" });
    }
}

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect(process.env.FRONTEND_URL);
}
