const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Group }) {
      // define association here
      this.hasMany(User, { foreignKey: 'locationId' });
      this.hasMany(Group, { foreignKey: 'locationId' });
    }
  }
  Location.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
