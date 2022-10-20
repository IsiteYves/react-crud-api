'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Damage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Damage.init({
    insuranceCompany: {
      type: DataTypes.STRING,
      allowNull: false
    },
    claimNumber: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    claimAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    useHomeAddress: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isExteriorDamage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isInteriorDamage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    causedByWater: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    causedByFire: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    causedByHall: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    damageDescription: {
      type: DataTypes.TEXT('medium'),
      allowNull: false
    },
    damagePhotos: {
      type: DataTypes.TEXT('medium'),
    }
  }, {
    sequelize,
    modelName: 'Damage',
  });
  return Damage;
};