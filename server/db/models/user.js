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
      Instrument, Genre, Group, Invite, Location, Token,
    }) {
      // define association here
      this.belongsToMany(Instrument, { through: 'UserInstrument', foreignKey: 'instrumentId' });
      this.belongsToMany(Genre, { through: 'UserGenre', foreignKey: 'genreId' });
      this.belongsToMany(Group, { through: 'UserGroup', foreignKey: 'groupId' });
      this.hasMany(Invite, { foreignKey: 'fromUserId' });
      this.hasMany(Invite, { foreignKey: 'toUserId' });
      this.belongsTo(Location, { foreignKey: 'locationId' });
      this.hasMany(Group, { foreignKey: 'ownerId' });
      this.hasOne(Token, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    profile: DataTypes.TEXT,
    password: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
