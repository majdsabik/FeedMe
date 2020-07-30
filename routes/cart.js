const express = require("express");
const app = require("../app");
const router = express.Router();
const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");
const SubOrder = require("../models/SubOrder");
const User = require("../models/Customer");

router.post("/", (req, res) => {
  let menu = [];
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
  let id = new Date().getTime();

  const orderId = "ON" + id;
  const Customer = req.user._id;
  const totPrice = req.body.total;
  const place_id = req.body.place_id;
  const deliveryAddress = req.body.deliveryAddress;

  Order.create({
    orderId,
    Customer,
    totPrice,
    place_id,
    deliveryAddress,
  })
    .then((newOrder) => {
      res.json(newOrder);
      let mainId = newOrder._id;
      let OrderId = newOrder.orderId;
      User.findByIdAndUpdate(
        Customer,
        { $addToSet: { orders: mainId } },
        { new: true }
      )
        .then((result) => {})
        .catch((err) => console.log(err));
      for (let restaurant in newItems) {
        const subOrderId = restaurant + id;
        const subTotal = newItems[restaurant].reduce(
          (a, v) => a + v.price * v.qty,
          0
        );
        let items = [];
        newItems[restaurant].map((item) => {
          for (let i = 0; i < item.qty; i++) {
            items.push(item._id);
          }
        });
        SubOrder.create({
          subOrderId,
          subTotal,
          items,
          restaurantPrefix: restaurant,
        })
          .then((subOrder) => {
            let subOrderId = subOrder._id;
            Order.findByIdAndUpdate(mainId, {
              $push: { subOrders: subOrderId },
            }).then((test) => console.log());
          })
          .then((MainOrder) => {})
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
