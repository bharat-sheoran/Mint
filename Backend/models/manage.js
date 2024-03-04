const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const manageSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Needs', 'Wants', 'Investment', 'Needs&Wants']
    },
    used: {
        type: Number,
        required: true
    },
    availaible: {
        type: Number,
        required: true
    },
    invested: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Manage = mongoose.model("Manage", manageSchema);
module.exports = Manage;