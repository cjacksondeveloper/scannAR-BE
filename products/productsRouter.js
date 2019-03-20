const router = require("express").Router();
const jwt = require('jsonwebtoken');
const db = require("../data/productsModule.js");
const { authenticate } = require("../api/globalMW.js");
const { jwtSecret } = require('../config/secrets.js')

router.get("/products", authenticate, (req, res) => {
  let { userId } = req.headers;
  db.getProducts(userId)
    .then(products => {
      res.send(products);
    })
    .catch(({ code, message }) => {
        res.status(code).json({ message });
      });
});

router.post("/products", authenticate, (req, res) => {
let { userId } = req.headers;
  db.addProduct(userId)
    .then(added => {
    res.send(added);
    })
    .catch(({ code, message }) => {
      res.status(code).json({ message });
    });
});

router.get("/listusers", authenticate, (req, res) => {
    const userid = req.decoded.subject
    const token = req.headers.token
    jwt.verify(token, jwtSecret, err => {
      if (err) {
        res.send(`${userid}`);
      } else {
        res.send(true);
      }
    });
  });

  module.exports = router