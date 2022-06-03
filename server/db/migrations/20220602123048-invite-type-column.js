module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Invites',
        'type',
        {
          type: Sequelize.STRING,
        },
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Invites', 'type'),
    ]);
  },
};
