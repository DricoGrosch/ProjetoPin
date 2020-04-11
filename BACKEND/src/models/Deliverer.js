"use_strict";
module.exports = (Sequelize, DataTypes) => {
  const Deliverer = Sequelize.define(
    "Deliverer",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      drivers_license: DataTypes.STRING,
      contract: DataTypes.STRING
    },
    {}
  );
  return Deliverer;
};
