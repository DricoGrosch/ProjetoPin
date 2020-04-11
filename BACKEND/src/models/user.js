const Person = require('./Person')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,

  }, {});
  User.associate = models => {
    User.hasOne(models.Person)
  }
  return User;
};