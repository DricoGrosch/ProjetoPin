const GasBottle = require("../models/GasBottle");





async function saveBottles(req, res) {

 const gasBottleExits = await GasBottle.findOne({ where: { type: req.body.type } });
 console.log(req.body.type)
  if (gasBottleExits) {
    console.log('teste')
    return res.status(400).json({ error: 'This type of bottle alredy exists' });
  }else{
    await GasBottle.create(req.body)
  }
  
 
 
}

async function getBottles(req, res) {
  try {
    const response = [];
    let request = await GasBottle.findAll();
    request.map((obj) => response.push(obj.dataValues));

    response
      ? res.status(200).json(JSON.stringify(response))
      : res.status(204).json({});
  } catch (e) {
    res.status(500).json({});
  }
}

module.exports = {
    getBottles,
    saveBottles,
};
