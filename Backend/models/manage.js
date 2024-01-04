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
        type: String,
        required: true
    },
    availaible: {
        type: String,
        required: true
    },
    invested: {
        type: String,
        required: true
    }
});

const Manage = mongoose.model("Manage", manageSchema);
module.exports = Manage;