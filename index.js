const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
// const config = require("./src/config");
// const expressSwagger = require("express-swagger-generator")(app);
const { sequelize } = require('./src/Models');

// CONNECT TO DATABASE
// mongoose
//   .connect(config.mongodb.url, config.mongodb.options)
//   .then(() => console.log("Connected to database successfully"))
//   .catch((e) => console.log("Could not connect to database", e));

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// SWAGGER DOCS
// expressSwagger(config.swagger);

// ROUTES
app.use("/api", require("./src/Routes"));

app.use(function (req, res, next) {
  return res.status(404).json({ error: "Resource not found" });
});

const { PORT = 4000, HOST } = process.env;
app.listen(PORT, async () => {
  console.log(`APP RUNNING ON  ${HOST}:${PORT}/`);
  console.log(`API DOCS ON ${HOST}:${PORT}/api-docs`);
  await sequelize.authenticate();
});
