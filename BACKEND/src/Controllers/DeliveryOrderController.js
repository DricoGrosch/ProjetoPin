const DeliveryOrder = require("../models/DeliveryOrder");
const GasBottle = require("../models/GasBottle");
const { Op } = require("sequelize");
const Person = require("../models/Person");
const Deliverer = require("../models/Deliverer");
async function createNewDeliveryOrder(req, res) {
  const data = req.body;
  const obj = {
    status: DeliveryOrder.status.REQUESTED,
    delivererId: data.deliverer,
    clientId: data.client,
    latitude: data.lat,
    longitude: data.lng,
    total: 0,
  };
  const bottlesToAdd = data.bottles.map((bottle) => {
    obj.total += parseFloat(bottle.sellPrice) * parseInt(bottle.amount);
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
        [Op.not]: [{ status: DeliveryOrder.status.FINISHED }],
      },
      include: [
        {
          model: Person,
          attributes: ["name"],
        },
        {
          model: GasBottle,
          as: "bottles",
        },
        // {
        //   model: Deliverer,
        //   attributes: ["name"],
        // },
      ],
    });

    unclosedOrders.map((order) => {
      order.dataValues.client = order.Person.dataValues.name;

      order.dataValues.bottles = order.bottles.map(({ dataValues }) => {
        return {
          type: dataValues.type,
          sellPrice: dataValues.sellPrice,
          amount: dataValues.DeliveryOrderGasBottle.amount,
        };
      });

      response.push(order.dataValues);
    });
    response
      ? res.status(200).json(JSON.stringify(response))
      : res.status(204).json({});
  } catch (e) {
    res.status(500).json({});
  }
}

async function endOrder(req, res) {
  const { id } = req.body;
  try {
    const order = await DeliveryOrder.findByPk(id);
    order.status = DeliveryOrder.status.FINISHED;
    order.save();
    res.status(200).json({ id });
  } catch (e) {
    res.status(500).json({});
  }
}

async function cancelOrder(req, res) {
  const { id } = req.body;
  try {
    const order = await DeliveryOrder.findByPk(id);
    order.status = DeliveryOrder.status.CANCELED;
    order.save();
    res.status(200).json({ id });
  } catch (e) {
    res.status(500).json({});
  }
}

module.exports = {
  createNewDeliveryOrder,
  loadDeliveryOrders,
  cancelOrder,
  endOrder,
};
