async function fetchAll() {
  const response = await fetch("/get/deliverers");
  const data = await response.json();
  return JSON.parse(data);
}

export default {
  fetchAll,
};
