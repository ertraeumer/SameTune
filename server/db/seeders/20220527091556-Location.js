const fs = require('fs');

const parsedCities = fs.readFileSync('./db/seeders/cities.txt', 'utf-8');

const cities = parsedCities.trim().split('\n');

const citiesForDb = [];

cities.map((el) => citiesForDb.push({
  name: el.trim(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', citiesForDb, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Location', null, {});
  },
};
