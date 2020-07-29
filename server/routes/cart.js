const express = require("express");
const app = require("../app");
const router = express.Router();
const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");
const SubOrder = require("../models/SubOrder");
const Restaurant = require("../models/Restaurant");
const User = require("../models/Customer");

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
  const newItems = items.reduce((a, v) => {
    if (a[v.restaurantPrefix]) {
      a[v.restaurantPrefix].push(v);
    } else {
      a[v.restaurantPrefix] = [v];
    }
    return a;
  }, {});
  const subOrders = [];
  let id = new Date().getTime();

  const orderId = "ON" + id;
  const Customer = req.user._id;
  const totPrice = req.body.total;
  console.log("I am the customer", Customer);

  Order.create({
    orderId,
    Customer,
    totPrice,
  })
    .then((newOrder) => {
      let mainId = newOrder._id;
      User.findByIdAndUpdate(
        { _id: req.user._id },
        { $push: { orders: newOrder._id } }
      );
      for (let restaurant in newItems) {
        const subOrderId = restaurant + id;
        const subTotal = newItems[restaurant].reduce(
          (a, v) => a + v.price * v.qty,
          0
        );
        const items = newItems[restaurant].map((item) => {
          return (item = {
            itemid: item._id,
            qty: item.qty,
          });
        });
        SubOrder.create({
          subOrderId,
          subTotal,
          items,
          restaurantPrefix: restaurant,
        })
          .then((subOrder) => {
            Order.findByIdAndUpdate(
              mainId,
              {
                $push: { subOrders: subOrder._id },
              },
              { new: true }
            );
          })
          .then((MainOrder) => {
            return res.json(MainOrder);
          })
          .catch((err) => {
            console.log(err);
          })
          .then(() => console.log("The then part", subOrders));
      }
    })
    .catch((err) => console.log(err));
  res.json(true);
});

module.exports = router;
