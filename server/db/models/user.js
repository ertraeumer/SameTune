const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Instrument, Genre, Group, Invite, Location,
    }) {
      // define association here
      this.belongsToMany(Instrument, { through: 'UserInstrument', foreignKey: 'userId' });
      this.belongsToMany(Genre, { through: 'UserGenre', foreignKey: 'userId' });
      this.belongsToMany(Group, { through: 'UserGroup', foreignKey: 'userId' });
      this.hasMany(Invite, { foreignKey: 'fromUserId' });
      this.hasMany(Invite, { foreignKey: 'toUserId' });
      this.belongsTo(Location, { foreignKey: 'locationId' });
      this.hasMany(Group, { foreignKey: 'ownerId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    profile: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    password: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
