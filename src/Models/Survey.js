const mongoose = require("mongoose");
const { Schema } = mongoose;

const Survey = new Schema({
   owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
   },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    questions: {
      type: Array,
      default: [],
    },
    answered: {
      type: Boolean,
      default: false,
    },
    published: {
      type: Boolean,
      default: false,
    },
    receive_results: {
      type: Boolean,
      default: false
    },
    share_result: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("survey", Survey);