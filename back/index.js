const express = require("express");
const cors = require("cors");
const db = require("./app/config/db");
const bodyParser = require("body-parser");

const app = express();
const Routes = require("./app/router/index");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Seteamos rutas Rutas
Routes(app);

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "No se encontro la direccion solicitada." });
});

// Conexion con Base de Datos
db.authenticate()
  .then(() => {
    // Conexion con Express JS
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((_error) => {
    console.log(_error);
  });
