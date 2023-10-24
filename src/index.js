const express = require("express");
const sequelize = require("./db/connect");

const app = require("./app");

// Router
const authRoute = require("./routes/authApi");

const port = process.env.PORT || 7000;

app.use("/api/v1", authRoute);

app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

async function startDatabase() {
  try {
    await sequelize.sync();

    console.log("Connected to Database successfully!");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, async () => {
  startDatabase();
  console.log("Server is up on port " + port);
});
