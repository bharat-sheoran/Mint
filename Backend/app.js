if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const Manage = require("./models/manage.js");
const manageRouter = require("./routes/manage.js");
const distributeRouter = require("./routes/distribute.js");
const homeRouter = require("./routes/home.js");
const authRouter = require("./routes/auth.js");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const cors = require("cors");
const mongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");


//TODO: Create Signup Authentication
//TODO: Store the information into the Database

const db_URL = process.env.DB_URL;

const store = mongoStore.create({
    mongoUrl: db_URL,
    crypto: {
        secret: process.env.COOKIE_SECRET
    },
    touchAfter: 24 * 3600
})

store.on("error", () => {
    console.log("ERROR IN MONGO SESSION STORE", err);
})

mongoose.connect(db_URL)
    .then(() => console.log('Connection to MONGO is Successfull')).catch(() => console.log("Error in Connecting"));

const sessionOptions = {
    store,
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.static("public"));

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/manage", manageRouter);
app.use("/distribute", distributeRouter);
app.use("/auth", authRouter);
app.use("/", homeRouter);

// app.get("/demouser" , async (req , res)=>{
//     let fakeUser = new User({
//         name: "Bharat",
//         email: "bharatsheoran@gmail.com",
//         username: "bharatsheoran",
//         phone: "9034781966"
//     });

//     let registeredUser = await User.register(fakeUser , "abc");
//     res.send(registeredUser);
// });

app.listen(port, () => {
    console.log(`App is listening at ${port}`);
});