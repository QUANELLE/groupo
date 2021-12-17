"use strict";
const express = require("express");
const Router = express.Router();
const userCtrl = require("../controllers/UserController");
// const auth = require("../middlewares/auth");
// const passwordValidation = require("../middlewares/password-validation");

Router.post("/signup",  userCtrl.signup);
Router.post("/login", userCtrl.login);
Router.get("/", userCtrl.findAllUsers);

module.exports = Router;

