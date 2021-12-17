const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  dialect: "mariadb",
  host: "localhost",
});

module.exports = sequelize;