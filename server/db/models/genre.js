const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Group }) {
      // define association here
      this.belongsToMany(User, { through: 'UserGenre', foreignKey: 'userId' });
      this.hasMany(Group, { foreignKey: 'genreId' });
    }
  }
  Genre.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};