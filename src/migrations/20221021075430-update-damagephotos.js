"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("DamagePhotos", "damage_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Damages",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {},
};
