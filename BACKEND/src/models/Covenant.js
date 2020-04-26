"use strict";

import { Model, DataTypes } from "sequelize/types";

class Covenant extends Model {
  static init(sequelize) {
    super.init(
      {
        id: DataTypes.INTEGER,
        discount_amaunt: DataTypes.DOUBLE,
      },
      { sequelize }
    );
  }
}

module.exports = Covenant;
