const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
const Restaurant = require('../models/Restaurant');
router.get('/', (req, res) => {
  MenuItem.find()
    .populate('restaurant')
    .then(menu => {
      res.status(200).json(menu);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;
