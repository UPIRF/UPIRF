const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const indexRoute = require("./src/routes/index");
const collegeRoute = require("./src/routes/college");
const adminRoute = require("./src/routes/admin");

// configurations
dotenv.config();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/public", express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Routes
app.use("/", indexRoute);
app.use("/college", collegeRoute);
app.use("/admin", adminRoute);

// Server Set-up
app.listen(process.env.SERVER_PORT || "5000", (err) => {
  if (err) console.log(err);
  console.log(`Server Up and Running at http://${host}:${port}/`);
});

module.exports = app;
