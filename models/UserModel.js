"use strict";
const Sequelize = require("sequelize");
const sequelize =require("../config/database");

 
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
              msg: "cet email est déjà utilisé"
          }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    module.exports = User;