const express = require('express');
const router = express.Router();
const SubOrder = require('../models/SubOrder');

router.post('/', (req, res) => {
  SubOrder.find({ restaurantPrefix: req.body.restaurantPrefix })
    .then(menu => {
      res.status(200).json(menu);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;
