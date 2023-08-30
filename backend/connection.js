const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://ayushempire03:kanbanapp@kanbanapp.ympxhwn.mongodb.net/kanban_app?retryWrites=true&w=majority";

// // mongodb connection
const mongoDB = () => {
  mongoose
    .connect(mongoURL, { useNewUrlParser: true })

    .then(() => {
      console.log("connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mongoDB;
