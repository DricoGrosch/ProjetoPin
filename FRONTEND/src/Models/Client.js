async function fetchAll() {
  const response = await fetch("/get/clients");
  const data = await response.json();
  return JSON.parse(data);
}

export default {
  fetchAll,
};
