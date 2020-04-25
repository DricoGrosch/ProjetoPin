const User = require ('../models/User')
const Person = require('../models/Person')

function createUser(req, res){
    const {username, password, status, personId} = req.body
    console.log(personId);
    
    User.create({username, password, status, personId})
   
    return res.json()
}



module.exports = {
    createUser
}