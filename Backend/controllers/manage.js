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
    await Debcred.findByIdAndUpdate(data.debcredId, {$push: {debit: savedData._id}});
    res.send("Successfull Addition");
}

module.exports.deleteManage = async (req , res)=>{
    let {id} = req.params;
    let {dcid} = req.params;
    await Manage.findOneAndDelete({_id: id});
    // const dDCID = await Debcred.updateOne({_id: id}, {$pull: {debit: {$elemMatch: {id}}}});
    //TODO: Also Delete the id from Debcred
    res.send("Deleted Successfully");
}

module.exports.editManage = async (req , res)=>{
    let {id} = req.params;
    let data = req.body;
    await Manage.findByIdAndUpdate(id , data);
    res.send("Edited Successfully");
}