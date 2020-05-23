module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'DeliveryOrder', // table name
        'latitude', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'DeliveryOrder', // table name
        'longitude', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('DeliveryOrder', 'latitude'),
      queryInterface.removeColumn('DeliveryOrder', 'longitude'),
    ]);
  },
};