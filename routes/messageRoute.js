"use strict";
const express = require("express");
const Router = express.Router();
const messageController = require("../controllers/messageController");
const auth = require("../middlewares/auth");


Router.post("/", messageController.createMessage);
// Router.post("/:id/like", auth, messageController.createLikeMessage);


Router.delete("/:id", auth, messageController.deleteMessage);
// Router.put("/:id", auth, multer, messageController.modifyMessage);
// Router.get("/:id", auth, messageController.getOneMessage);

Router.get("/userMessages", messageController.findUserMessages);
Router.get("/", auth, messageController.findAllMessages);

module.exports = Router;

