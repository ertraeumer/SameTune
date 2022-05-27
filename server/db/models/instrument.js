const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Group, Invite }) {
      // define association here
      this.belongsToMany(User, { through: 'UserInstrument', foreignKey: 'userId' });
      this.belongsToMany(Group, { through: 'GroupInstrument', foreignKey: 'groupId' });
      this.hasMany(Invite, { foreignKey: 'instrumentId' });
    }
  }
  Instrument.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Instrument',
  });
  return Instrument;
};
