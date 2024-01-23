const Distribute = require("../models/distribute.js");

module.exports.getDistribute = async (req , res)=>{
    let data = await Distribute.find({}).sort({date: 1});
    res.send(data);
}

module.exports.addDistribute = async (req , res)=>{
    let data = req.body;
    const newData = new Distribute(data);
    await newData.save();
    //TODO: Also add to Debcred
    res.send("Successfull Addition");
}

module.exports.deleteDistribute = async (req , res)=>{
    let {id} = req.params;
    await Distribute.findOneAndDelete({_id: id});
    //TODO: Also delete from the Debcred
    res.send("Deleted Successfully");
}

module.exports.editDistribute = async (req ,res)=>{
    let {id} = req.params;
    let data = req.body;
    console.log(id , data);
    await Distribute.findByIdAndUpdate(id , data);
    res.send("Edited Successfully");
}