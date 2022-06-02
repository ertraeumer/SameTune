const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Invite extends Model {
    static associate({ User, Group, Instrument }) {
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
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Invite',
  });
  return Invite;
};
