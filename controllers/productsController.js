const dbClient = require("../infra/dbClient");
const ProductDAO = require("../dao/productDao")(dbClient);

// Abordagem 1 - Classes
class ProductsController {
  createProduct(req, res) {
    ProductDAO.save(req.body, (id, err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ ...req.body, id });
      }
    });
  }

  getAllProducts(req, res) {
    ProductDAO.findAll((err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(result.rows);
      }
    });
  }

  getProductById(req, res) {
    ProductDAO.findOne(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else if (result.rowCount) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: `product not found` });
      }
    });
  }

  updateProduct(req, res) {
    console.log("PUT", req.params.id, req.body);
    ProductDAO.updateComplete();
  }

  updateProductPartial(req, res) {
    console.log("PATCH", req.params.id, req.body);
    ProductDAO.updatePartial();
  }

  removeProduct(req, res) {
    ProductDAO.removeOne(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(204).end();
      }
    });
  }
}

module.exports = new ProductsController();

/* 
// Abordagem 2 - Exportei Funções (Métodos)

exports.createProduct = (req, res) => console.log("POST", req.body);

exports.getAllProducts = (req, res) =>
  console.log("GET 1", req.query, req.baseUrl, req.url);

exports.getProductById = (req, res) => console.log("GET 2", req.params.id);
*/

/* 
// Abordagem 3 - Exportei Objeto Literal com os Métodos

module.exports = {
  createProduct: (req, res) => console.log("POST", req.body),
  getAllProducts: (req, res) =>
    console.log("GET 1", req.query, req.baseUrl, req.url),
  getProductById: (req, res) => console.log("GET 2", req.params.id),
};
*/
