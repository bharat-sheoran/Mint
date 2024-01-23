const Debcred = require("../models/debcred.js");

module.exports.getDebcred = async (req , res)=>{
    let data = await Debcred.find({}).populate({path: "debit"}).populate({path: "credit"}).exec();
    res.send(data);
}