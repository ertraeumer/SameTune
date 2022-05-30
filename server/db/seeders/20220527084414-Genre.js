const fs = require('fs');

const parsedGenres = fs.readFileSync('./db/seeders/genres.txt', 'utf-8');

const genres = parsedGenres.trim().split('\n');

const genresForDb = [];

genres.map((el) => genresForDb.push({
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
    await queryInterface.bulkInsert('Genres', genresForDb, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Genres', null, {});
  },
};
