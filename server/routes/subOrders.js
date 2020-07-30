const express = require("express");
const router = express.Router();
const SubOrder = require("../models/SubOrder");

router.post("/", (req, res) => {
  SubOrder.find({
    $and: [
      { restaurantPrefix: req.body.restaurantPrefix },
      { status: { $ne: "Delivered" } },
    ],
  })
    .populate("items")
    .sort({ createdAt: 1 })
    .then((menu) => {
      res.status(200).json(menu);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/advance", (req, res) => {
  SubOrder.findByIdAndUpdate(
    { _id: req.body.id },
    { status: req.body.status },
    { upsert: true }
  )
    .then((menu) => {
      res.status(200).json(menu);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
