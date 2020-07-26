const mongoose = require('mongoose');
const SubOrder = require('../models/SubOrder');

mongoose.connect('mongodb://localhost/FeedMe', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const SubOrders = [
  {
    subOrderId: 'RIC001',
    subTotal: 1,
    status: 'placed',
    items: ['001', '002'],
    restaurant: '5f1d3ada31b5db0465f2e83f',
  },
  {
    subOrderId: 'RIC002',
    subTotal: 2,
    status: 'inPreparation',
    items: ['003', '004'],
    restaurant: '5f1d3ada31b5db0465f2e83f',
  },
  {
    subOrderId: 'TDA001',
    subTotal: 3,
    status: 'placed',
    items: ['005', '006'],
    restaurant: '5f1d3ada31b5db0465f2e840',
  },
  {
    subOrderId: 'TDA002',
    subTotal: 4,
    status: 'inPreparation',
    items: ['007', '008'],
    restaurant: '5f1d3ada31b5db0465f2e840',
  },
];

SubOrder.insertMany(SubOrders)
  .then(SubOrders => {
    console.log('Success! Added ' + SubOrders.length + ' SubOrders to the database');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
