module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'DeliveryOrderGasBottle', // table name
        'amount', // new field name
        {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('DeliveryOrderGasBottle', 'amount'),
    ]);
  },
};