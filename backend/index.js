// importing express from express
import express from "express";

// importing mongoose
import mongoose from "mongoose";

// creating instance of express to app
const app = express();

// selecting port on that we want to run bakend
const port = 5000;

// mongodb url
const mongoURL =
  "mongodb+srv://ayushempire03:kanbanapp@kanbanapp.ympxhwn.mongodb.net/kanban_appretryWrites=true&w=majority";

// mongodb connection
await mongoose
  .connect(mongoURL, { useNewUrlParser: true })

  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

// app.get method
app.get("/", (req, res) => {
  res.send("hello world");
});

// app.listen method
app.listen(port, () => {
  console.log("port:", port);
});
