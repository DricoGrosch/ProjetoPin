const secret = require('./secret');

module.exports = {
  "development": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "teste2Pin",
    "host": "127.0.0.1",
    "dialect": "postgres",

  },
  "test": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "teste2Pin",
    "host": "127.0.0.1",
    "dialect": "postgres",

  },
  "production": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "teste2Pin",
    "host": "127.0.0.1",
    "dialect": "postgres",
  }
}