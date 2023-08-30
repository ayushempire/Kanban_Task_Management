const express = require("express");
const mongoDB = require("./connection");
const cors = require("cors");

const app = express();

mongoDB();
const port = 5000;

// todo : Middleware:
// todo:  Routes app.get method
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(express.json());
app.use(cors());
app.use("/api", require("./Routes/CreateUser"));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.listen method
app.listen(port, () => {
  console.log("port:", port);
});
