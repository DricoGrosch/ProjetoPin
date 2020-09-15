const User = require("../models/User");

function createUser(req, res) {
  const { username, password, status, personId } = req.body;
  User.create({ username, password, status, personId });
  return res.json();
}

async function handleLogin(req, res) {
  const { username, password } = req.body;

  try {
    let response = await User.findOne({
      where: {
        username,
        password,
      },
    });
    response ? res.status(200).json(JSON.stringify(response.dataValues)) : res.status(204).json({});
} catch (error) {
    res.status(500).json({});
  }
}

module.exports = {
  createUser,
  handleLogin,
};
