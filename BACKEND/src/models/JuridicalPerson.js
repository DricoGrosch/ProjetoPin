"use_strict";
module.exports = (Sequelize, DataTypes) => {
  const JuridicalPerson = Sequelize.define(
    "JuridicalPerson",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      cnpj: DataTypes.STRING,
    },
    {}
  );
  JuridicalPerson.associate = (models) => {
    JuridicalPerson.hasOne(models.Covenant);
  };
  return JuridicalPerson;
};
