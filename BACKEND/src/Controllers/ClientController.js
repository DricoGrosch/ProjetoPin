const PhysicalPerson = require("../models/PhysicalPerson");
const JuridicalPerson = require("../models/JuridicalPerson");
const Person = require("../models/Person");
const Covenant = require("../models/Covenant");
async function saveClient(req, res) {
  const data = req.body;

  const client = { address: data.address, name: data.name };
  if (data.juridical) {
    client.cnpj = data.cnpj;
    if (data.id) {
      let db_person = await Person.findByPk(data.id);
      let db_client = await JuridicalPerson.findByPk(data.id);
      let db_covenant = await Covenant.findByPk(db_client.covenantId);
      db_covenant.update({ discount_amount: data.discount_amount });
      db_client.update(client);
      db_person.update(client);
    } else {
      const person = await Person.create(client);
      client.id = person.dataValues.id;
      const covenant = await Covenant.create({
        discount_amount: parseFloat(data.covenant_discount_amount),
      });
      client.covenantId = covenant.dataValues.id;
      JuridicalPerson.create(client);
    }
  } else {
    client.cpf = data.cpf;
    if (data.id) {
      let db_person = await Person.findByPk(data.id);
      let db_client = await PhysicalPerson.findByPk(data.id);
      db_person.update(client);
      db_client.update(client);
    } else {
      const person = await Person.create(client);
      client.id = person.dataValues.id;
      PhysicalPerson.create(client);
    }
  }
  return res.json();
}
async function getClients(req, res) {
  try {
    const response = [];
    let request = await PhysicalPerson.findAll();
    request.map((obj) => response.push(obj.dataValues));
    request = await JuridicalPerson.findAll();
    request.map((obj) => response.push(obj.dataValues));

    response
      ? res.status(200).json(JSON.stringify(response))
      : res.status(204).json({});
  } catch (e) {
    res.status(500).json({});
  }
}
module.exports = { saveClient, getClients };
