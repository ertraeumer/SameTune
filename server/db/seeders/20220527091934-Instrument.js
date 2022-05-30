const fs = require('fs');

const parsedInstruments = fs.readFileSync('./db/seeders/instruments.txt', 'utf-8');

const instruments = parsedInstruments.trim().split('\n');

const instrumentsForDb = [];

instruments.map((el) => instrumentsForDb.push({
  name: el,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Instruments', instrumentsForDb, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Instruments', null, {});
  },
};
