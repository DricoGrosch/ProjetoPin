const { Model, DataTypes } = require("sequelize");

// Não consrgui usar a herança de Pessoa junto com o init do sequelzize, então ficou assim mesmo
class PhysicalPerson extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        cpf: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}
module.exports = PhysicalPerson;
