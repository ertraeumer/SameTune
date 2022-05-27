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
    await queryInterface.bulkInsert('Genres', [{
      name: 'rock',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'rap',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'pop',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'folk',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'metall',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
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
