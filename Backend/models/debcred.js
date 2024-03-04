const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const debcredSchema = new Schema({
    debit: [{
        type: Schema.Types.ObjectId,
        ref: 'Manage'
    }],
    credit: [{
        type: Schema.Types.ObjectId,
        ref: 'Distribute'
    }],
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const Debcred = mongoose.model("Debcred", debcredSchema);
module.exports = Debcred;