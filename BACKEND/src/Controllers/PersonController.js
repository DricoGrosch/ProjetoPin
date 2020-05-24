const Person = require('../models/Person')

function createPerson(req, res){
    Person.create(req.body)
   
    return res.json()
}



module.exports = {
    createPerson
}