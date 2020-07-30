const mongoose = require('mongoose');
const SubOrder = require('../models/SubOrder');

mongoose.connect('mongodb+srv://Majd:jDhbPasGdgn1fgz2@cluster0.hhdjt.mongodb.net/FeedMe?retryWrites=true&w=majority', {
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
    restaurantPrefix: 'RIC',
  },
  {
    subOrderId: 'RIC002',
    subTotal: 2,
    status: 'inPreparation',
    items: ['003', '004'],
    restaurantPrefix: 'RIC',
  },
  {
    subOrderId: 'TDA001',
    subTotal: 3,
    status: 'placed',
    items: ['005', '006'],
    restaurantPrefix: 'TDA',
  },
  {
    subOrderId: 'TDA002',
    subTotal: 4,
    status: 'inPreparation',
    items: ['007', '008'],
    restaurantPrefix: 'TDA',
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
