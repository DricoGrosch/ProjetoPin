async function loadDeliveryOrders(setDeliveryOrders) {
  debugger;
  const response = await fetch("/get/deliveryOrders");
  const data = await response.json();
  setDeliveryOrders(JSON.parse(data));
}

export default { loadDeliveryOrders };
