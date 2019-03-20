const db = require("../data/dbConfig.js");

module.exports = {
  getProducts,
  addProduct
};

function getProducts(userId) {
    return db("products")
    .where({ userId })
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