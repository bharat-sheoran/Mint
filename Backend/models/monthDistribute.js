const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monthDistributeSchema = new Schema({
    january: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    february: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    march: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    april: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    may: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    june: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    july: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    august: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    september: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    october: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    november: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    },
    december: {
        type: Schema.Types.ObjectId,
        ref: "Debcred"
    }
})

const MonthDistribute = mongoose.model("MonthDistribute", monthDistributeSchema);
module.exports = MonthDistribute;