"use strict";

const User = require("../models/UserModel");


exports.getAllUsers = (req, res) => {
    return User.findAll()
      .then((users) => res.status(200).json(users))
      .catch((error) => res.status(400).json({ error }));
  };
