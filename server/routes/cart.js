const express = require('express');
const app = require('../app');
const router = express.Router();
const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

router.post('/', (req, res) => {
    let menu = [], id = null;
    let cart = JSON.parse(req.body.cart);
    console.log(cart)
    if (!cart) return res.json(menu)
    MenuItem.find().then(data => {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        id = data[i].itemNo;
        console.log(id)
        if (cart.hasOwnProperty(id)) {
          data[i].qty = cart[id]
          menu.push(data[i]);
        }
      }
      return res.json(menu);
    }).catch(err => {
      console.log(err)
    })
  });

// app.post('/checkout', (req,res) => {
//     let cart = req.body.cart;
//     cart.forEach(item => {
//         MenuItem.find({itemNo:item.key}).then(
//             founditem => {
//                 Order.create({})
//             }
//         )

//     })
// })



module.exports = router;


