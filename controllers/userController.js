"use strict";

const sequelize = require("../config/database");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signup = (req, res, next) => {

  console.log("==>requete");
  console.log(req.body);
  sequelize.sync()
    .then((res) => {

        bcrypt
       .hash(req.body.password, 10)
       .then((hash) => User.create(
         { email: req.body.email, username: req.body.username, password: hash }
         ))    
       .catch((error) => res.status(400).json({"erreur create" : error }))
    })
    .catch((error) => res.status(400).json({"erreur sync create user" : error }))
    
};

exports.login = (req, res, next) => {
  User.findOne({ where: { email: req.body.email }})
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              `${process.env.TOKEN_SECRET}`,
              { expiresIn: "24h" }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.findAllUsers = (req, res) => {
  User.findAll()
  .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};