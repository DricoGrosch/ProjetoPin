const { Model, DataTypes } = require("sequelize");

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
      },
      { sequelize }
    );
  }


}
module.exports = Person;
