import express from "express";
const router = express.Router();

export default function CreateUser() {
  router.post("/CreateUser", (req, res) => {
    res.json({ success: true });
  });
  module.exports = router;
}

module.exports = CreateUser;
