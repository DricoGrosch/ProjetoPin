const User = require("../src/models/User");
const Person = require("../src/models/Person");
const JuridicalPerson = require("../src/models/JuridicalPerson");
const PhysicalPerson = require("../src/models/PhysicalPerson");
const Covenant = require("../src/models/Covenant");
const Deliverer = require("../src/models/Deliverer");
const GasBottle = require("../src/models/GasBottle");
const DeliveryOrder = require("../src/models/DeliveryOrder");
const DeliveryOrderGasBottle = require("../src/models/DeliveryOrderGasBottle");

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
  GasBottle.init(db);
  DeliveryOrder.init(db);
  DeliveryOrderGasBottle.init(db);
  
  GasBottle.associate(db.models);
  DeliveryOrder.associate(db.models);
}

module.exports = initDatabase;
