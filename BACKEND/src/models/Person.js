'use strict';


module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
  }, {});

  return Person;
};