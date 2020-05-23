"use strict";

const { Model, DataTypes } = require("sequelize");

class Covenant extends Model {
  static init(sequelize) {
    super.init(
      {
        discount_amount: DataTypes.DOUBLE,
      },
      { sequelize }
    );
  }
}

module.exports = Covenant;
