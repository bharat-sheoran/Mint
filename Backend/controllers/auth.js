const User = require("../models/user.js");
const passport = require("passport");

module.exports.loginFailed = (req, res) => {
    console.log("Login Failed");
    res.json({ success: false, message: 'User Not Logged in successfully' });
}

module.exports.loginSuccessfull = async (req, res) => {
    res.status(200);
    const username = req.body.username;
    console.log(username);
    const userData = await User.findOne({ username: username }).exec();
    res.send(userData);
}

module.exports.signup = async (req, res, next) => {
    try {
        const { name, username, password, email, phone } = req.body;
        const newUser = new User({ name: name, email: email, username: username, phone: phone });
        User.register(newUser, password, (err, user) => {
            if (err) {
                console.log(err);
                res.status(500);
                res.send("Problem while signing up");
            }
            passport.authenticate('local')(req, res, () => {
                res.status(200);
                res.send("Signup Successfull");
            });
        });
    } catch (e) {
        res.send("Error in Signup");
    }
}

module.exports.logout = (req, res) => {
    console.log("Logout Request Comes");
    req.logout();
    res.status(200);
    res.send("Logout Successfull");
}
