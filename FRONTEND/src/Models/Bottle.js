async function fetchAll() {
  const response = await fetch("/get/bottles");
  const data = await response.json();
  return JSON.parse(data);
}

export default {
  fetchAll,
};

