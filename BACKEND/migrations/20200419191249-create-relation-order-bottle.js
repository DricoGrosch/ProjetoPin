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
      deliveryOrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "DeliveryOrder",
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("DeliveryOrderGasBottle");
  },
};
