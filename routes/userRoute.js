"use strict";
const express = require("express");
const Router = express.Router();
const userController = require("../controllers/UserController");
// const auth = require("../middlewares/auth");
// const passwordValidation = require("../middlewares/password-validation");

Router.post("/signup",  userController.signup);
Router.post("/login", userController.login);
Router.get("/", userController.findAllUsers);

module.exports = Router;

