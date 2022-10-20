'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Damages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      insuranceCompany: {
        type: Sequelize.STRING,
        allowNull: false
      },
      claimNumber: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      claimAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      useHomeAddress: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isExteriorDamage: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isInteriorDamage: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      causedByWater: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      causedByFire: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      causedByHall: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      damageDescription: {
        type: Sequelize.TEXT('medium'),
        allowNull: false
      },
      damagePhotos: {
        type: Sequelize.TEXT('medium'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Damages');
  }
};