"use strict";
const express = require("express");
const Router = express.Router();
const userCtrl = require("../controllers/UserController");


Router.get("/", userCtrl.getAllUsers);





  module.exports = Router;
