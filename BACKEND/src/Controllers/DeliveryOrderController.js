const DeliveryOrder = require("../models/DeliveryOrder");
const GasBottle = require("../models/GasBottle");
const { Op } = require("sequelize");
async function createNewDeliveryOrder(req, res) {
  const data = req.body;
  const obj = {
    status: DeliveryOrder.status.REQUESTED,
    delivererId: data.deliverer,
    latitude: data.lat,
    longitude: data.lng,
  };
  const bottlesToAdd = data.bottles.map((bottle) => {
    return { id: bottle.bottleId, amount: bottle.amount };
  });
  const deliveryOrder = await DeliveryOrder.create(obj);
  bottlesToAdd.map(async (bottle) => {
    const db_bottle = await GasBottle.findByPk(bottle.id);
    await deliveryOrder.addBottle(db_bottle, {
      through: { amount: parseInt(bottle.amount) },
    });


    
  });
  return res.json();
}

async function loadDeliveryOrders(req, res) {
  const response = [];
  try {
    const unclosedOrders = await DeliveryOrder.findAll({
      where: {
        [Op.not]: [{ status: DeliveryOrder.status.DELIVERED }],
      },
    });

    unclosedOrders.map(async (order) => {
      response.push(order.dataValues);
    });
    response
      ? res.status(200).json(JSON.stringify(response))
      : res.status(204).json({});
  } catch (e) {
    res.status(500).json({});
  }
}

module.exports = {
  createNewDeliveryOrder,
  loadDeliveryOrders,
};
