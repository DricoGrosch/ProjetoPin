import config from "../../config";
import Bottle from "../../Models/Bottle";

async function handleSaveBottle(bottle, setBottles) {
  const init = config.request_init;
  init.body = JSON.stringify(bottle);
  await fetch("/post/bottles", init);
}

async function loadBottles(setBottles) {
  const data = await Bottle.fetchAll()
  setBottles(data);
}

async function setBottleToEdit(bottle, setFormBottle) {
    setFormBottle({ ...bottle });
}
export default {
  handleSaveBottle,
  loadBottles,
  setBottleToEdit,
};
