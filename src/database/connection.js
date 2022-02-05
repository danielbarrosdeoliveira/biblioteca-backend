const Sequelize = require("sequelize");

const conncetion = new Sequelize({
  dialect: "sqlite",
  storage: "./biblioteca.sqlite",
});

module.exports = conncetion;
