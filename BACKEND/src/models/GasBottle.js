 const {Model,DataTypes} = require ('sequelize')

class GasBottle extends Model{
  static init(sequelize){
    super.init({
      type: DataTypes.STRING,
      costPrice: DataTypes.DOUBLE,
      sellPrice: DataTypes.DOUBLE
    },{sequelize})
  }
  
  static associate({ DeliveryOrder,DeliveryOrderGasBottle}) {
   GasBottle.belongsToMany(DeliveryOrder, {
      through: DeliveryOrderGasBottle,
      as: "deliveryOrders",
      foreignKey: "gasBottleId",
    });
  }
}
module.exports = GasBottle