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

  updateComplete(id, body, callback) {
    const { name, price, quantity } = body;
    const sql = `UPDATE public.products SET
                    name = $1,
                    price = $2,
                    quantity = $3
                 WHERE
                    id = $4`;
    this.db.query(sql, [name, price, quantity, id], callback);
  }

  updatePartial(id, body, callback) {
    const fields = [];

    for (const key in body) {
      fields.push(`${key}='${body[key]}'`);
    }

    const sql = `UPDATE public.products SET
                    ${fields}
                 WHERE
                    id = $1`;

    this.db.query(sql, [id], callback);
  }

  removeOne(id, callback) {
    const sql = "DELETE FROM public.products WHERE id = $1";
    this.db.query(sql, [id], callback);
  }
}

module.exports = (dbClient) => new ProductDAO(dbClient);
