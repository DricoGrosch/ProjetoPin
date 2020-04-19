
"use_strict";
module.exports = (Sequelize, DataTypes) => {
  const DeliveryOrder = Sequelize.define(
    "DeliveryOrder",
    {   
      id: DataTypes.INTEGER,
      status: DataTypes.INTEGER
    },
    {}
  );
  DeliveryOrder.associate = (models) => {
    DeliveryOrder.hasOne(models.Deliverer);
    DeliveryOrder.hasMany(models.GasBottle);

  };
  return DeliveryOrder;
};
