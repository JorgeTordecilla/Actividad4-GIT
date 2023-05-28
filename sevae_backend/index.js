const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT;

const app = express();
require("./swaggerConfig")(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Servidor corriendo http://localhost:${PORT}`)
);
