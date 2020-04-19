
"use_strict";
module.exports = (Sequelize, DataTypes) => {
  const GasBottle = Sequelize.define(
    "GasBottle",
    {   
      id: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      costPrice: DataTypes.DOUBLE,
      sellPrice: DataTypes.DOUBLE
    },
    {}
  );
  return GasBottle;
};
