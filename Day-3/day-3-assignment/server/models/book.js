'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Book.belongsTo(models.User, {as: 'user', foreignKey: 'user_id'})
    }
  };
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    cover_image_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};