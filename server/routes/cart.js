const express = require("express");
const app = require("../app");
const router = express.Router();
const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");

router.post("/", (req, res) => {
  let menu = [],
    id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(menu);
  MenuItem.find({ itemNo: { $in: Object.keys(cart) } })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/order", (req, res) => {
  console.log(req.body);
  let items = req.body;
  res.json(true);
});

module.exports = router;
