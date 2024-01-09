const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const debcredSchema = new Schema({
    debit: {
        type: Schema.Types.ObjectId,
        ref: 'Manage'
    },
    credit: {
        type: Schema.Types.ObjectId,
        ref: 'Distribute'
    }
})

const Debcred = mongoose.model("Debcred", debcredSchema);
module.exports = Debcred;