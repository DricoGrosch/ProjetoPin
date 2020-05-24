const DeliveryOrder = require("../models/DeliveryOrder");
const GasBottle = require("../models/GasBottle");
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
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();

  //   const deliveryOrder = await PhysicalPerson.create(client);
  //   deliveryOrder.setGasBottles()
  return res.json();
}

module.exports = {
  createNewDeliveryOrder,
};
