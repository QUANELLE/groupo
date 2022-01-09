"use strict";

const sequelize = require("../config/database");
const Message = require("../models/PostModel");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
User.hasMany(Message);

// créér un message
exports.createMessage = (req, res) => {
  sequelize.sync()
    .then((res) => {
      let user = User.findOne({ where: { id: req.body.userId } });
      return user;
    })
    // .then((res)=> Message.create({ message: req.body.message }))  
    .then((user) => { return user.createMessage({ message: req.body.message }) })

    .then(() => res.status(201).json({ message: "message créé!" }))

    .catch((error) => res.status(400).json({ "erreur creation message:": error }));
}


// voir tous les messages
exports.findAllMessages = (req, res) => {
  Message.findAll()
    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};

// voir tous les messages d'un utilisateur
exports.findUserMessages = (req, res) => {
  Message.findAll({ where: { userId: req.body.userId } })
    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};

// détruire un message
exports.deleteMessage = (req, res) => {
  Message.destroy({ where: { id: req.body.id } })
  
  .then(() => res.status(200).json("message suprimé"))
  .catch((error) => res.status(400).json({ error }));
};

// Modifier un message
exports.modifyMessage = (req, res) => {

};

//  Voir un message
exports.getOneMessage = (req, res) => {

};

// liker un message
exports.createLikeMessage = (req, res) => {

};

// Commenter un message

// modifier le commentaire d'un message

// supprimer un commentaire
