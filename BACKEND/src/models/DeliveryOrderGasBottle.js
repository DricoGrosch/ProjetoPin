const { Model, DataTypes } = require("sequelize");

class DeliveryOrderGasBottle extends Model {
  static init(sequelize) {
    super.init(
      {
        gasBottleId: {
          type: DataTypes.INTEGER,
          references: {
            model: "GasBottle",
            key: "id",
          },
        },
        deliveryOrderId: {
          type: DataTypes.INTEGER,
          references: {
            model: "DeliveryOrder",
            key: "id",
          },
        },

        amount: DataTypes.INTEGER,
      },
      { sequelize }
    );
  }
}
module.exports = DeliveryOrderGasBottle;
