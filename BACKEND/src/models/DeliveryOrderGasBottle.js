const { Model, DataTypes } = require("sequelize");

class DeliveryOrderGasBottle extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: DataTypes.INTEGER,
      },
      { sequelize }
    );
  }
}
module.exports = DeliveryOrderGasBottle;
