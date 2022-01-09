"use strict";

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    console.log("token==",token);
    let decodedToken = jwt.verify(
      token,
      `${process.env.TOKEN_SECRET}`
    );
    let userId = decodedToken.userId;
    console.log("userId décodé==",userId);
    console.log("req.body.userId==",req.body.userId);
    if (req.body.userId && req.body.userId !== userId) {
      throw "utilisateur non valable";
    }
    console.log("next de auth");
    next();
  } catch (err) {
    res.status(403).json({ error: err | "unauthorized request" });
  }
};
