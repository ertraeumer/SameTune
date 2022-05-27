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
    await queryInterface.bulkInsert('Locations', [{
      name: 'Moscow',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Peter',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Minsk',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kiev',
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
    await queryInterface.bulkDelete('Location', null, {});
  },
};
