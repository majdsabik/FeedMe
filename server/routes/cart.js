const express = require('express');
const app = require('../app');
const router = express.Router();
const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

app.post('/', (req, res) => {
    let menu = [], id = null;
    let cart = JSON.parse(req.body.cart);
    if (!cart) return res.json(menu)
    for (var i = 0; i < data.menu.length; i++) {
      id = data.menu[i].id.toString();
      if (cart.hasOwnProperty(id)) {
        data.menu[i].qty = cart[id]
        menu.push(data.menu[i]);
      }
    }
    console.log(cart)
    return res.json(menu);
  });

app.post('/checkout', (req,res) => {
    let cart = req.body.cart;
    cart.forEach(item => {
        MenuItem.find({itemNo:item.key}).then(
            founditem => {
                Order.create({})
            }
        )

    })
})



module.exports = router;


