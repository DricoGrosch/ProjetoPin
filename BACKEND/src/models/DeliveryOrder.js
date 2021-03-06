const { Model, DataTypes } = require("sequelize");

class DeliveryOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        status: DataTypes.INTEGER,
        latitude: DataTypes.INTEGER,
        longitude: DataTypes.INTEGER,
        delivererId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Deliverer",
            key: "id",
          },
        },
      },
      { sequelize }
    );
    this.status = {
      REQUESTED: 1,
      ON_COURSE: 2,
      DELIVERED: 3,
    };
  }

  static associate({ Deliverer, GasBottle, DeliveryOrderGasBottle }) {
    DeliveryOrder.belongsTo(Deliverer, { foreignKey: "delivererId" });
    DeliveryOrder.belongsToMany(GasBottle, {
      through: DeliveryOrderGasBottle,
      as: "bottles",
      foreignKey: "deliveryOrderId",
    });
  }
}

module.exports = DeliveryOrder;
