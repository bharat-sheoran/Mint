const Distribute = require("../models/distribute.js");

module.exports.getDistribute = async (req , res)=>{
    let data = await Distribute.find({});
    res.send(data);
}