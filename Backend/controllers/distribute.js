const Distribute = require("../models/distribute.js");

module.exports.getDistribute = async (req , res)=>{
    let data = await Distribute.find({});
    res.send(data);
}

module.exports.deleteDistribute = async (req , res)=>{
    let {id} = req.params;
    let result = await Distribute.findOneAndDelete({_id: id});
    res.send("Deleted Successfully");
}