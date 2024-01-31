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
const passportSetup = require("./passport.js");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const cookieSession = require("cookie-session");
const cors = require("cors");
// const mongoStore = require("connect-mongo");



const db_URL = process.env.DB_URL;
mongoose.connect(db_URL)
    .then(() => console.log('Connection to MONGO is Successfull')).catch(() => console.log("Error in Connecting"));

// const store = mongoStore.create({
//     mongoUrl: db_URL,
//     crypto: {
//         secret: "cafrejadhvcedfjawduoewiao"
//     },
//     touchAfter: 24 * 3600
// })

// store.on("error", () => {
//     console.log("ERROR IN MONGO SESSION STORE", err);
// })

// const sessionOptions = {
//     store,
//     secret: "cafrejadhvcedfjawduoewiao",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true
//     }
// }

app.use(cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET],
    maxAge: 24 * 60 * 60 * 100
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.static("public"));

app.use("/manage", manageRouter);
app.use("/distribute", distributeRouter);
app.use("/", homeRouter);
app.use("/auth", authRouter);


app.listen(port, () => {
    console.log(`App is listening at ${port}`);
});