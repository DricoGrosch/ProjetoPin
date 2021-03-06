const { Model, DataTypes } = require("sequelize");
const Person = require("../models/Person");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        status: DataTypes.STRING,
        personId: { 
          type: DataTypes.INTEGER, 
          references: {
             model: "Person",key:'id' } },
      },
      { sequelize }
    );
  }
  static associate({ Person }) {
    this.hasOne(Person);
   
  }
}
module.exports = User;
