const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Sequelize.Model { }
  User.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hash_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize
  });
  return User;
};
