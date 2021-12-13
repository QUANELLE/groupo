"use strict";
// const {Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
    // const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
              msg: "cet email est déjà utilisé"
          }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
    // return User
    // User.sync();
    
    // const User = sequelize.define('user', {
      //   firstName: {
        //     type: Sequelize.STRING
        //   },
        //   lastName: {
          //     type: Sequelize.STRING
          //   }
          // });
          
          // force: true will drop the table if it already exists
        }
        // User.sync({force: true}).then(() => {
        //   // Table created
        //   console.log("table créee!!");
        //   return User.create({
        //     email: 'john@email.com',
        //     username: 'John',
        //     password: 'Hancock'
        //   });
        // });