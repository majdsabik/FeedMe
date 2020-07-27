const mongoose = require('mongoose');
const Order = require('../models/Order');

mongoose.connect('mongodb://localhost/FeedMe', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const orders = [
  {
    orderId: '001',
    customer: '5f1bc58ded22f3266d387e80',
    totPrice: 20,
    status: 'placed',
    items: ['001', '002', '005', '006'],
    subOrders: ['RIC001', 'TDA001'],
  },
  {
    orderId: '002',
    customer: '5f1bc58ded22f3266d387e80',
    totPrice: 40,
    status: 'inPreparation',
    items: ['003', '004', '007', '008'],
    subOrders: ['RIC002', 'TDA002'],
  },
];

Order.insertMany(orders)
  .then(orders => {
    console.log('Success! Added ' + orders.length + ' orders to the database');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
