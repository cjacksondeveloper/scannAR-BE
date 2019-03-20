const db = require("../data/dbConfig.js");

module.exports = {
  getProducts,
  addProduct
};

function getProducts(products) {
    return db("products")
    .where("products", products)
  }

async function addProduct(product) {
    const [id] = await db("products").insert(product);
    return findById("products", id);
}

function findById(table, id) {
    return db(`${table}`)
      .where({ id })
      .first();
  }