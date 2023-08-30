// importing express from express
import express from "express";

// importing mongodb function from connextions
import mongoDB from "./connection.js";

// creating instance of express to app
const app = express();

mongoDB();
// selecting port on that we want to run bakend
const port = 5000;

// todo : Middleware:
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// todo:  Routes app.get method
app.get("/", (req, res) => {
  res.send("hello world");
});

// app.listen method
app.listen(port, () => {
  console.log("port:", port);
});
