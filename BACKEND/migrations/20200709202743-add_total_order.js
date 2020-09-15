module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "DeliveryOrder", // table name
        "total", // new field name
        {
          allowNull: true,
          type: Sequelize.DOUBLE,
        }
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn("DeliveryOrder", "total"),
    ]);
  },
};
