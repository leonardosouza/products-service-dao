// Importando Modulos
const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

// Ativando Middlewares
app.use(express.json());

// Rotas
const productsRouter = require("../routes/productsRouter");
app.use("/products", productsRouter);

// Inicializando a Aplicacao
app.listen(PORT, console.log(`Server running at port ${PORT}...`));
