const {Model, DataTypes} = require('sequelize')

class DeliveryOrder extends Model{
  static init(sequelize){
    super.init({
      id: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      covenantId: { 
        type: DataTypes.INTEGER, 
        references: {
           model: "Covenant",key:'id' } },
      covenantId: { 
      type: DataTypes.INTEGER, 
      references: {
          model: "Covenant",key:'id' } },

    },{sequelize})
  }
  // OLHAR COMO FUNCIONA AS FOREING KEYS DESTA CLASSE - Parro
  static associate = (models) => {
    DeliveryOrder.hasOne(models.Deliverer);
    DeliveryOrder.hasMany(models.GasBottle);
  };
}

module.exports = DeliveryOrder
