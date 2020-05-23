const Deliverer = require("../models/Deliverer");
async function getDeliverers(req, res) {
  try {
    const response = [];
    let request = await Deliverer.findAll();
    request.map((obj) => response.push(obj.dataValues));

    response
      ? res.status(200).json(JSON.stringify(response))
      : res.status(204).json({});
  } catch (e) {
    res.status(500).json({});
  }
}

module.exports = {
  getDeliverers,
};
