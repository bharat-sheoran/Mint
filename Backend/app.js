const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Manage = require("./models/manage.js");



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

let server = {
    ser: "Server is working fine",
    port: "At port 8080"
}

app.get("/", (req, res) => {
    res.send(server);
})

app.get("/manage", async (req , res)=>{
    let data = await Manage.find({});
    res.send(data);
})

app.post("/manage" , async (req , res)=>{
    let data = req.body;
    const newData = new Manage(data);
    const savedData = await newData.save();
    res.send("Successfull Addition");
})

app.delete("/manage/:id", async (req , res)=>{
    let {id} = req.params;
    await Manage.findOneAndDelete({_id: id});
    res.send("Deleted Successfully");
})

app.put("/manage/:id", async (req , res)=>{
    let {id} = req.params;
    console.log(id);
    res.send("Edited Successfully");
})

app.listen(port, () => {
    console.log(`App is listening at ${port}`);
});