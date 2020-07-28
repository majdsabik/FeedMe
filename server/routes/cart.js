const express = require("express");
const app = require("../app");
const router = express.Router();
const Order = require("../models/Order");
const MenuItem = require("../models/MenuItem");
const SubOrder = require("../models/SubOrder");
const Restaurant = require("../models/Restaurant");

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
  let id = new Date().getTime();
  const test2 = items.map((el) => {
    return Restaurant.findOne({ prefix: el.restaurantPrefix }).then((res) => {
      const subOrderId = el.restaurantPrefix + id;
      const subTotal = el.price * el.qty;
      const itemName = el.name;
      const qty = el.qty;
      const restaurantPrefix = el.restaurantPrefix;
      return SubOrder.create({
        subOrderId,
        subTotal,
        itemName,
        qty,
        restaurantPrefix,
      })
        .then((subOrder) => {
          console.log(subOrder);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  console.log(test2);
  // const arrays = Promise.all(test2).then((resp) => {
  //   console.log("Arrays", resp);
  // });

  // items.forEach((el) => {
  //   for (let i = 0; i < items.length; i++) {
  //     result[el.restaurantPrefix] = items.filter(
  //       (res) => res.restaurantPrefix === el.restaurantPrefix
  //     );
  //   }
  // });
  // console.log("This is the result", result);

  // result.forEach((res) => {
  //   console.log("I am here", res);
  //   subOrderId = res.restaurantPrefix + new Date().getTime();
  //   subTotal = res.price * res.qty;
  //   items = items.push(res.itemNo);
  //   restaurantPrefix = res.restaurantPrefix;
  //   console.log(subOrderId, subTotal, items, restaurantPrefix);
  //   SubOrder.create({ subOrderId, subTotal, items, restaurantPrefix })
  //     .then((subOrder) => {
  //       console.log(subOrder);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  res.json(true);
});

module.exports = router;
