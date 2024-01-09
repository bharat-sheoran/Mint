const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const distributeSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    amount: {
        type: Number,
        required: true
    },
    needs: {
        type: Number,
        required: true
    },
    wants: {
        type: Number,
        required: true
    },
    investment: {
        type: Number,
        required: true
    }
})

const Distribute = mongoose.model("Distribute", distributeSchema);
module.exports = Distribute;