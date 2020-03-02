'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'type', {
      type: Sequelize.ENUM,
      values: ['Administrador', 'Entregador', 'Cliente'],
      defaultValue: 'Cliente',
      allowNull: false,
      validate: {
        notEmpty: true
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('User', 'type');
  }
};
