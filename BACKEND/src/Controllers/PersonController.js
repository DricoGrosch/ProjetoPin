const Person = require('../models/Person')

function createPerson(req, res){
    console.log(req.body)
    Person.create(req.body)
   
    return res.json()
}



module.exports = {
    createPerson
}