const { Model, DataTypes } = require("sequelize");

class PhysicalPerson extends Model {
  static init(sequelize){
    super.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      cpf:DataTypes.STRING
    },
    {sequelize}
    );
  }
}
module.exports = PhysicalPerson