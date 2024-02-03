const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("./models/user.js");

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'],
    enableProof: true
},
    function (accessToken, refreshToken, profile, cb) {
        cb(null, profile)
    }
));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
},
    function (accessToken, refreshToken, profile, callback) {
        callback(null, profile)
    }
));

passport.use(new LocalStrategy(async function (email, password, done) {
    const user = await User.findOne(user => user.email === email && user.password === password);
    if (!user) return done(null, false);
    if (user.password !== password) return done(null, false);
    return done(null, user);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});