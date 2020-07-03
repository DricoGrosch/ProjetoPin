"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("DeliveryOrderGasBottle", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gasBottleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "GasBottle",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
      },
      deliveryOrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "DeliveryOrder",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
      },
      amount:{
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("DeliveryOrderGasBottle");
  },
};
