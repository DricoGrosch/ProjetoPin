const express = require('express')
const UserController = require('./src/Controllers/UserController')
const PersonController = require('./src/Controllers/PersonController')

const routes = express.Router()

routes.post('/create/person',PersonController.createPerson)
routes.post('/create/users',UserController.createUser)

module.exports = routes