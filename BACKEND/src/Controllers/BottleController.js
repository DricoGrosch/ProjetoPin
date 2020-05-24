const GasBottle = require("../models/GasBottle");
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
};
