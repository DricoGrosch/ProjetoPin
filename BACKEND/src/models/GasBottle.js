 const {Model,DataTypes} = require ('sequelize')

class GasBottle extends Model{
  static init(sequelize){
    super.init({
      id: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      costPrice: DataTypes.DOUBLE,
      sellPrice: DataTypes.DOUBLE
    },{sequelize})
  }
}
module.exports = GasBottle