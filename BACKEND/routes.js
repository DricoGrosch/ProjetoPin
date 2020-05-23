const express = require('express')
const UserController = require('./src/Controllers/UserController')
const PersonController = require('./src/Controllers/PersonController')
const ClientController = require('./src/Controllers/ClientController')
const DelivererController = require('./src/Controllers/DelivererController')

const routes = express.Router()

routes.post('/create/person',PersonController.createPerson)
routes.post('/create/users',UserController.createUser)
routes.post('/get/user',UserController.handleLogin)
routes.post('/post/client',ClientController.saveClient)
routes.get('/get/clients',ClientController.getClients)
routes.get('/get/deliverers',DelivererController.getDeliverers)

module.exports = routes


 