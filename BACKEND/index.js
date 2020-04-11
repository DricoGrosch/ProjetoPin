//o express faz a conexão do frontend com o backend através das rotas
const express = require('express')
const getRoutes = require('./routes/getRoutes')

//faz a requisição do postgre
//const {Client} = require('pg')
//const client = new Client()
//client.connect()

const app =express()
//mapeia o formato que as requisições serão enviadas pelas rotas
app.use(express.json())
//define que as rotas utilizadas virão do nosso próprio arquivo de rotas
//app.use(routes)
app.use(express.urlencoded({extended:false}))
//porta do projeto
app.get('/',getRoutes.home)

  app.listen(8000)


