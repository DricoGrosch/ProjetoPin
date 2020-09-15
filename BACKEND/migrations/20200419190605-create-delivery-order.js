"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("DeliveryOrder", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Person",
          key: "id",
        },
      },

      delivererId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Deliverer",
          key: "id",
        },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("DeliveryOrder");
  },
};
