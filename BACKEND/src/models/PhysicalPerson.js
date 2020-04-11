module.exports = (sequelize, DataTypes) => {
  const PhysicalPerson = sequelize.define('PhysicalPerson', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    cpf:DataTypes.STRING
  }, {});

  return Person;
};