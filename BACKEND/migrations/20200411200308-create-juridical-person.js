"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("JuridicalPerson", {
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
      cnpj: {
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
      covenantId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Covenant",
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
    return queryInterface.dropTable("JuridicalPerson");
  },
};
