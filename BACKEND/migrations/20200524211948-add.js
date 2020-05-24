module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "DeliveryOrderGasBottle", // table name
        "createdAt", // new field name
        {
          allowNull: false,
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        "DeliveryOrderGasBottle", // table name
        "updatedAt", // new field name
        {
          allowNull: false,
          type: Sequelize.DATE,
        }
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn("DeliveryOrderGasBottle", "createdAt"),
      queryInterface.removeColumn("DeliveryOrderGasBottle", "updatedAt"),
    ]);
  },
};
