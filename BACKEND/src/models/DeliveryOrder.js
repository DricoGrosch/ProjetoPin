const { Model, DataTypes } = require("sequelize");
const Person = require("./Person");

class DeliveryOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        status: DataTypes.INTEGER,
        latitude: DataTypes.INTEGER,
        longitude: DataTypes.INTEGER,
        total: DataTypes.DOUBLE,
        delivererId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Deliverer",
            key: "id",
          },
        },
        clientId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Person",
            key: "id",
          },
        },
      },
      { sequelize }
    );
    this.status = {
      REQUESTED: 1,
      ON_COURSE: 2,
      FINISHED: 3,
      CANCELED: 4,
    };
  }

  static associate({ Deliverer, GasBottle, DeliveryOrderGasBottle }) {
    DeliveryOrder.hasOne(Deliverer, { foreignKey: "id" });
    DeliveryOrder.hasOne(Person, { foreignKey: "id" });
    DeliveryOrder.belongsToMany(GasBottle, {
      through: DeliveryOrderGasBottle,
      as: "bottles", //esse alias é desnecessário
      foreignKey: "deliveryOrderId",
    });
  }
}

module.exports = DeliveryOrder;
