// importing express from express
import express from "express";

// creating instance of express to app
const app = express();

// selecting port on that we want to run bakend
const port = 5000;

// app.get method
app.get("/", (req, res) => {
  res.send("hello world");
});

// app.listen method
app.listen(port, () => {
  console.log("port:", port);
});
