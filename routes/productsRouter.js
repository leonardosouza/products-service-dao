const express = require("express");
const router = express.Router();

// Create - Criando um produto
router.post("/", (req, res) => console.log("POST", req.body));

// Read - Pegando os produtos
router.get("/", (req, res) =>
  console.log("GET 1", req.query, req.baseUrl, req.url)
);

// Read - Pegando um produto
router.get("/:id", (req, res) => console.log("GET 2", req.params.id));

// Update - Atualizando um produto (total)
router.put("/:id", (req, res) => console.log("PUT", req.params.id));

// Update - Atualizando um produto (parcial)
router.patch("/:id", (req, res) => console.log("PATCH", req.params.id));

// Delete - Excluindo um produto
router.delete("/:id", (req, res) => console.log("DELETE", req.params.id));

module.exports = router;
