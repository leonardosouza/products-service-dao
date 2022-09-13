const ProductDAO = require("../dao/productDao");
console.log(ProductDAO);

// Abordagem 1 - Classes
class ProductsController {
  createProduct(req, res) {
    console.log("POST", req.body);
    ProductDAO.save();
  }

  getAllProducts(req, res) {
    console.log("GET 1", req.query, req.baseUrl, req.url);
    ProductDAO.findAll();
  }

  getProductById(req, res) {
    console.log("GET 2", req.params.id);
    ProductDAO.findOne();
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
    console.log("DELETE", req.params.id);
    ProductDAO.removeOne();
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
