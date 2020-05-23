const User = require("../src/models/User");
const Person = require("../src/models/Person");
const JuridicalPerson = require("../src/models/JuridicalPerson");
const PhysicalPerson = require("../src/models/PhysicalPerson");
const Covenant = require("../src/models/Covenant");
const Deliverer = require("../src/models/Deliverer");

const Sequelize = require("sequelize");
const dbConfig = require("../config/database").development;
const db = new Sequelize(dbConfig);
function initDatabase() {
  User.init(db);
  Person.init(db);
  PhysicalPerson.init(db);
  JuridicalPerson.init(db);
  Covenant.init(db);
  Deliverer.init(db);
  User.associate(db.models);
}

module.exports = initDatabase;
