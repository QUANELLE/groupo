const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  dialect: "mariadb",
  host: "localhost",
});
try {
  sequelize.authenticate();
  console.log('Connexion établie avec la base de données.');
} catch (error) {
  console.error('Impossible de se connecter à la BDD:', error);
}

module.exports = sequelize;