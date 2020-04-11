'use strict';

module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
        id: DataTypes.INTEGER,
        discount_amaunt: DataTypes.DOUBLE
    }, {});

    return Person;
};