const DeliveryOrder = require("../models/DeliveryOrder");
async function createNewDeliveryOrder(req, res) {
  const data = req.body;
  const deliveryOrder = {
    status: DeliveryOrder.status.REQUESTED,
    delivererId: data.delivererId,
    latitude: data.lat,
    longitude: data.lng,
  };
  //   const deliveryOrder = await PhysicalPerson.create(client);
  //   deliveryOrder.setGasBottles()
  return res.json();
}

module.exports = {
  createNewDeliveryOrder,
};
