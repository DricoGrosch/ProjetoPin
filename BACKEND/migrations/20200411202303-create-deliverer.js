"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Deliverer", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        references: {
          model: "Person",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      latitude: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      longitude: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      drivers_license: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      contract: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("Deliverer");
  },
};
