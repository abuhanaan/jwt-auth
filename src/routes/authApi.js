const express = require("express");
const { register, login } = require("../controllers/authController");
const auth = require("../middlewares/auth");

const router = new express.Router();

router.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome to FreeCodeCamp 🙌");
});

router.post(
  "/register", // middleware and controller for creating user
  register
);

router.post(
  "/login", // middleware and controller sign in
  login
);

module.exports = router;
