"use strict";
const Sequelize = require("sequelize");
const sequelize =require("../config/database");

 
    const Message = sequelize.define("message", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },      
      message: {
          type: Sequelize.STRING,
          allowNull: false            
      }
    });

    module.exports = Message;