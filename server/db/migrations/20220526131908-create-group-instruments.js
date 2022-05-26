module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupInstruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      instrumentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Instruments',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupInstruments');
  },
};
