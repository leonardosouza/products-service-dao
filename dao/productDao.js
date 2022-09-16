const { ulid } = require("ulid");

class ProductDAO {
  constructor(dbClient) {
    this.db = dbClient;
  }

  save(body, callback) {
    const { name, price, quantity } = body;
    const id = ulid();
    const sql =
      "INSERT INTO public.products (id, name, price, quantity) VALUES ($1, $2, $3, $4)";
    this.db.query(sql, [id, name, price, quantity], callback.bind({}, id));
  }

  findAll(callback) {
    const sql = "SELECT * FROM public.products";
    this.db.query(sql, callback);
  }

  findOne(id, callback) {
    const sql = "SELECT * FROM public.products WHERE id = $1";
    this.db.query(sql, [id], callback);
  }

  updateComplete() {}

  updatePartial() {}

  removeOne(id, callback) {
    const sql = "DELETE FROM public.products WHERE id = $1";
    this.db.query(sql, [id], callback);
  }
}

module.exports = (dbClient) => new ProductDAO(dbClient);
