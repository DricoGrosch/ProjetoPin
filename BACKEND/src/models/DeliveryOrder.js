const {Model, DataTypes} = require('sequelize')

class DeliveryOrder extends Model{
  static init(sequelize){
    super.init({
      status: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      longitude: DataTypes.INTEGER,
      delivererId: { 
        type: DataTypes.INTEGER, 
        references: {
           model: "Deliverer",key:'id' } },

    },{sequelize})
  }

  static associate = (models) => {
    DeliveryOrder.hasOne(models.Deliverer);
    DeliveryOrder.hasMany(models.GasBottle);
  };
}

module.exports = DeliveryOrder
