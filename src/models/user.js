const Sequelize = require("sequelize");
const sequelize = require("../db/connect");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  last_name: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  token: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
});

module.exports = User;
