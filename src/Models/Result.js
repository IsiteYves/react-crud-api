const mongoose = require("mongoose");
const { Schema } = mongoose;

const Result = new Schema({
    survey: {
        type: Schema.Types.ObjectId,
        ref: 'survey'
    },
    result: {
        type: String,
        default: null
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('result', Result);