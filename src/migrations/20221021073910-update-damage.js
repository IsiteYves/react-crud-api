'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Damages', 'damagePhotos');
  },

  async down (queryInterface, Sequelize) {
  }
};
