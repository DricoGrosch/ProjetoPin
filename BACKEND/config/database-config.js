const User = require("../src/models/User"); 

const Person = require("../src/models/Person"); 

const Sequelize = require('sequelize'); 
const dbConfig = require("../config/database").development; 
const db = new Sequelize(dbConfig) 
function initDatabase() {    
  User.init(db);
  Person.init(db)
  User.associate(db.models)
} 

module.exports = initDatabase; 

