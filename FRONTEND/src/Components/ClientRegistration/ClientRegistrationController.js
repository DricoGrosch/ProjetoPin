import config from "../../config";
import Client from "../../Models/Client";

async function handleSaveClient(client, setClients) {
  const init = config.request_init;
  init.body = JSON.stringify(client);
  await fetch("/post/client", init);
}

async function loadClients(setClients) {
  const data = await Client.fetchAll()
  setClients(data);
}

async function setClientToEdit(client, setFormClient) {
  if (client.cpf) {
    setFormClient({ ...client, physical: true, juridical: false });
  } else {
    setFormClient({ ...client, juridical: true, physical: false });
  }
}
export default {
  handleSaveClient,
  loadClients,
  setClientToEdit,
};
