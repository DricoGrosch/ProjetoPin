const secret = require('./secret');

module.exports = {
  "development": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": secret.DATABASE_NAME,
    "host": secret.DATABASE_HOST,
    "port":secret.DATABASE_PORT,
    "dialect": "postgres",
    "define":{
      "freezeTableName": true
    }

  },
  "test": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "projetoPin",
    "host": "127.0.0.1",
    "dialect": "postgres",

  },
  "production": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "projetoPin",
    "host": "127.0.0.1",
    "dialect": "postgres",
  }
}