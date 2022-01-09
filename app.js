"use strict";
const express = require("express");
// const helmet = require("helmet");
// const path = require("path");
const sequelize = require("./config/database");
const User = require("./models/userModel");
const Message = require("./models/PostModel")
const UserRoute = require("./routes/UserRoute");
const MessageRoute = require("./routes/messageRoute");
const app = express();



sequelize
    // .sync({force:true})
    .sync()
    .then((res) => {
        
        console.log("app sync");
    })
    .catch((error) => {console.log(error);})


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
// app.use(helmet());

app.use(express.json());

// app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", UserRoute);
app.use("/api/messages", MessageRoute);

module.exports = app;
