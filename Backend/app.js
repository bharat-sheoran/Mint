const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Manage = require("./models/manage.js");
const manageRouter = require("./routes/manage.js");
const distributeRouter = require("./routes/distribute.js");
const homeRouter = require("./routes/home.js");



const db_URL = "mongodb://127.0.0.1:27017/mint";
mongoose.connect(db_URL)
    .then(() => console.log('Connection to MONGO is Successfull')).catch(() => console.log("Error in Connecting"));

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(allowCrossDomain);
app.use(express.static("public"));

app.use("/manage" , manageRouter);
app.use("/distribute" , distributeRouter);
app.use("/", homeRouter);


let server = {
    ser: "Server is working fine",
    port: "At port 8080"
}

app.listen(port, () => {
    console.log(`App is listening at ${port}`);
});