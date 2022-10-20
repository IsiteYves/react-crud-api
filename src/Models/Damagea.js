const mongoose = require("mongoose");
const { Schema } = mongoose;

const Damage = new Schema({
    insuranceCompany: {
      type: String,
      required: true,
    },
    claimNumber: {
      type: String,
      default: ''
    },
    claimAddress: {
      type: String,
      required: true
    },
    useHomeAddress: {
      type: Boolean,
      required: true
    },
    isExteriorDamage: {
      type: Boolean,
      required: true
    },
    isInteriorDamage: {
      type: Boolean,
      required: true
    },
    causedByWater: {
      type: Boolean,
      required: true
    },
    causedByWind: {
      type: Boolean,
      required: true
    },
    causedByFire: {
      type: Boolean,
      required: true
    },
    causedByHall: {
      type: Boolean,
      required: true
    },
    damageDescription: {
      type: String,
      required: true
    },
    damagePhotos: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("damage", Damage);