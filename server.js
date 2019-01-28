const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;
const mongoURI = require("./config/keys").mongoURI;

// DATABASE CONNEXION
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongoose connected"))
  .catch(err => console.log(err));

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ROUTES
const reportsRouter = require("./api/reports");
app.use("/report", reportsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
