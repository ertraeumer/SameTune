const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Invite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Group, Instrument }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'fromUserId' });
      this.belongsTo(Group, { foreignKey: 'toGroupId' });
      this.belongsTo(User, { foreignKey: 'toUserId' });
      this.belongsTo(Instrument, { foreignKey: 'instId' });
    }
  }
  Invite.init({
    fromUserId: DataTypes.INTEGER,
    toGroupId: DataTypes.INTEGER,
    toUserId: DataTypes.INTEGER,
    instId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Invite',
  });
  return Invite;
};
