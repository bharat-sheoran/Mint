const Manage = require("../models/manage.js");
const Debcred = require("../models/debcred.js");

module.exports.getManage = async (req , res)=>{
    let data = await Manage.find({}).sort({date: 1});
    res.send(data);
}

module.exports.addManage = async (req , res)=>{
    let data = req.body;
    const newData = new Manage(data.formData);
    const savedData = await newData.save();
    const dDCA = await Debcred.findByIdAndUpdate(data.debcredId, {$push: {debit: savedData._id}, $inc: {amount: -savedData.used}});
    res.send("Successfull Addition");
}

module.exports.deleteManage = async (req , res)=>{
    let {id} = req.params;
    let {dcid} = req.params;
    let data = await Manage.findById(id);
    await Manage.findOneAndDelete({_id: id});
    await Debcred.updateOne({_id: dcid}, {$pull: {debit: id}, $inc: {amount: data.used}});
    res.send("Deleted Successfully");
}

module.exports.editManage = async (req , res)=>{
    let {id} = req.params;
    let {dcid} = req.params;
    let data = req.body;
    let savedData = await Manage.findById(id);
    await Manage.findByIdAndUpdate(id , data);
    await Debcred.updateOne({_id: dcid}, {$inc: {amount: data.used - savedData.used}});
    res.send("Edited Successfully");
}