import config from "../../config";
async function loadDeliveryOrders(setDeliveryOrders) {
  const response = await fetch("/get/deliveryOrders");
  const data = await response.json();
  setDeliveryOrders(JSON.parse(data));
}

async function endOrder(id, deliveryOrders, setDeliveryOrders) {
  const init = config.request_init;
  init.body = JSON.stringify({
    id,
  });
  const response = await fetch("/post/end_order", init);
  if (response.status == 200) {
    const data = await response.json();
    const newOrders = deliveryOrders.filter(({ id }) => id !== data.id);
    setDeliveryOrders(newOrders);
  } else {
  }
}
async function cancelOrder(id, deliveryOrders, setDeliveryOrders) {
  const init = config.request_init;
  init.body = JSON.stringify({
    id,
  });
  const response = await fetch("/post/cancel_order", init);
  if (response.status == 200) {
    const data = await response.json();
    const newOrders = deliveryOrders.filter(({ id }) => id !== data.id);
    setDeliveryOrders(newOrders);
  } else {
  }
}

export default { loadDeliveryOrders, endOrder, cancelOrder };
