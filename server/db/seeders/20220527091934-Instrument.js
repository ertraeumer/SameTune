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
    await queryInterface.bulkInsert('Instruments', [{
      name: 'Guitar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Drums',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Bass',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Triangle',
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
    await queryInterface.bulkDelete('Instruments', null, {});
  },
};
