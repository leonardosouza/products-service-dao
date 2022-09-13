const { Router } = require("express");
const router = Router();
const ProductsController = require("../controllers/productsController");

// Create - Criando um produto
router.post("/", ProductsController.createProduct);

// Read - Pegando os produtos
router.get("/", ProductsController.getAllProducts);

// Read - Pegando um produto
router.get("/:id", ProductsController.getProductById);

// Update - Atualizando um produto (total)
router.put("/:id", ProductsController.updateProduct);

// Update - Atualizando um produto (parcial)
router.patch("/:id", ProductsController.updateProductPartial);

// Delete - Excluindo um produto
router.delete("/:id", ProductsController.removeProduct);

module.exports = router;
