const Distribute = require("../models/distribute.js");
const Debcred = require("../models/debcred.js");

module.exports.getDistribute = async (req , res)=>{
    let data = await Distribute.find({}).sort({date: 1});
    res.send(data);
}

module.exports.addDistribute = async (req , res)=>{
    let data = req.body;
    const newData = new Distribute(data.formData);
    const savedData = await newData.save();
    await Debcred.findByIdAndUpdate(data.debcredId, {$push: {credit: savedData._id}, $inc: {amount: savedData.needs + savedData.wants}});
    res.send("Successfull Addition");
}

module.exports.deleteDistribute = async (req , res)=>{
    let {id} = req.params;
    let {dcid} = req.params;
    let data = await Distribute.findById(id);
    await Distribute.findOneAndDelete({_id: id});
    await Debcred.updateOne({_id: dcid}, {$pull: {credit: id}, $inc: {amount: -data.needs - data.wants}});
    res.send("Deleted Successfully");
}

module.exports.editDistribute = async (req ,res)=>{
    let {id} = req.params;
    let {dcid} = req.params;
    let data = req.body;
    let savedData = await Distribute.findById(id);
    await Distribute.findByIdAndUpdate(id , data);
    await Debcred.updateOne({_id: dcid}, {$inc: {amount: data.needs + data.wants - savedData.needs - savedData.wants}});
    res.send("Edited Successfully");
}