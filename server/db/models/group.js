const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Instrument, Invite, Genre, Location,
    }) {
      // define association here
      this.belongsToMany(User, { through: 'UserGroup', foreignKey: 'groupId' });
      this.belongsToMany(Instrument, { through: 'GroupInstrument', foreignKey: 'groupId' });
      this.hasMany(Invite, { foreignKey: 'toGroupId' });
      this.belongsTo(Genre, { foreignKey: 'genreId' });
      this.belongsTo(Location, { foreignKey: 'locationId' });
      this.belongsTo(User, { foreignKey: 'ownerId' });
    }
  }
  Group.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    locationId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
