const express = require('express')
const UserController = require('./src/Controllers/UserController')
const PersonController = require('./src/Controllers/PersonController')
const ClientController = require('./src/Controllers/ClientController')
const DelivererController = require('./src/Controllers/DelivererController')
const BottleController = require('./src/Controllers/BottleController')
const DeliveryOrderController = require('./src/Controllers/DeliveryOrderController')

const routes = express.Router()

routes.post('/create/person',PersonController.createPerson)
routes.post('/create/users',UserController.createUser)
routes.post('/get/user',UserController.handleLogin)
routes.post('/post/client',ClientController.saveClient)
routes.get('/get/clients',ClientController.getClients)
routes.get('/get/deliverers',DelivererController.getDeliverers)
routes.get('/get/bottles',BottleController.getBottles)
routes.post('/post/deliveryOrder',DeliveryOrderController.createNewDeliveryOrder)
routes.get('/get/deliveryOrders',DeliveryOrderController.loadDeliveryOrders)

module.exports = routes


 