// const mongoose = require("mongoose");

import mongoose from "mongoose";
const mongoURL =
  "mongodb+srv://ayushempire03:kanbanapp@kanbanapp.ympxhwn.mongodb.net/kanban_appretryWrites=true&w=majority";

// // mongodb connection
export default function mongoDB() {
  mongoose
    .connect(mongoURL, { useNewUrlParser: true })

    .then(() => {
      console.log("connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

// module.exports = mongoDB;
// import React from "react";
