const express = require("express");
const app = require("../app");
const router = express.Router();
const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");
const SubOrder = require("../models/SubOrder");

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
  let items = req.body.order;
  let user = req.user;
  console.log(items);
  items.map((el) => {
    console.log(el.restaurant);
  });
  res.json(true);
});

module.exports = router;
