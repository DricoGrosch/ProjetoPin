
const { Model, DataTypes } = require("sequelize");



class JuridicalPerson extends Model{
  static init(sequelize){
    super.init({
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      covenantId: { 
        type: DataTypes.INTEGER, 
        references: {
           model: "Covenant",key:'id' } },

    },{sequelize})
  }
  static associate({ Covenant }) {
    this.hasOne(Covenant);
    
  }
}
module.exports = JuridicalPerson