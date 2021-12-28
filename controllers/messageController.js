"use strict";

const sequelize = require("../config/database");
const Message = require("../models/PostModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.createMessage = (req, res) => {

  console.log("==>requete");
  console.log(req.body);
  
//   let messageObjet = JSON.parse(req.body.message);
//   delete messageObjet._id;
  sequelize.sync()   
  .then((res) => Message.create({
    message: req.body.message
        // let message = new Message({
            // ...messageObjet,
            // imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
            // return res.status(201).json({ message: "message créé!" })
          }))
  
    
    // .catch((error) => res.status(400).json({ error }));
        //  { message: req.body.message }
        //  )    
    //    .catch((error) => res.status(400).json({"erreur create message" : error }))  })
    
}



exports.findAllMessages = (req, res) => {
  Message.findAll()
  .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};
exports.findUserMessages = (req, res)=> {
    Message.findAll({where: { UserId: req.body.UserId }})
    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};