const router = require("express").Router();
const jwt = require('jsonwebtoken');
const db = require("../data/productsModule.js");
const { authenticate } = require("../api/globalMW.js");
const { jwtSecret } = require('../config/secrets.js')

router.get("/", authenticate, (req, res) => {
    const userid = req.decoded.subject
    console.log(`${userid}`)
  db.getProducts(userid)
    .then(products => {
      res.status(200).json(products);
    })
    .catch(({ code, message }) => {
        res.status(code).json({ message });
      });
});

router.post("/", authenticate, (req, res) => {
    const userid = req.decoded.subject
  db.addProduct(userid)
    .then(added => {
      res.status(201).json(added);
    })
    .catch(({ code, message }) => {
      res.status(code).json({ message });
    });
});

router.post("/listusers", authenticate, (req, res) => {
    const userid = req.decoded.subject
    const token = req.headers.authorization
    jwt.verify(token, jwtSecret, err => {
      if (err) {
        res.send(`${userid}`);
      } else {
        res.send(`${userid}`);
      }
    });
  });

  module.exports = router