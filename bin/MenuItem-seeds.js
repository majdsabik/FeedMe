const mongoose = require('mongoose');
const MenuItem = require('../models/MenuItem');
​
mongoose.connect('mongodb://localhost/FeedMe', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
​
const menu = [
  {
    itemNo: '001',
    name: 'Yam Wumsen',
    description: 'Glass noodle salad with tomato, iceberg lettuce, peanuts, cucumber and onnions.',
    price: 7.5,
    category: ['lunch', 'thai', 'fit', 'salad'],
    prepTime: 8,
    restaurantPrefix: 'RIC',
  },
  {
    itemNo: '002',
    name: 'Gung Tod',
    description: 'Shrimp tempura skewers served with sweet-sour sauce and spicy cucumber dip.',
    price: 9,
    category: ['lunch', 'thai', 'spicy', 'seafood'],
    prepTime: 15,
    restaurantPrefix: 'RIC',
  },
  {
    itemNo: '003',
    name: 'Chicken Saté',
    description: 'Chicken skewers with home made peanut sauce and spicy cucumber dip.',
    price: 9,
    category: ['lunch', 'thai', 'spicy', 'chicken'],
    prepTime: 15,
    restaurantPrefix: 'RIC',
  },
  {
    itemNo: '004',
    name: 'Tod Man Bla',
    description: 'Fried fish cake with fish paste, beans, curry, eggs and lemon leaves, served with fresh salad.',
    price: 11,
    category: ['lunch', 'thai', 'fish'],
    prepTime: 15,
    restaurantPrefix: 'RIC',
  },
  {
    itemNo: '005',
    name: 'Fish Madras (medium hot)',
    description: 'Fish simmered in tamarind juice, shredded garlic and coconut milk, served with basmati rice.',
    price: 10.5,
    category: ['lunch', 'dinner', 'indian', 'fish'],
    prepTime: 15,
    restaurantPrefix: 'TDA',
  },
  {
    itemNo: '006',
    name: 'Palak Paneer',
    description: 'Home made cottage cheese cooked in creamy spinach sauce with fengureek.',
    price: 12,
    category: ['lunch', 'dinner', 'indian', 'vegetarian'],
    prepTime: 12,
    restaurantPrefix: 'TDA',
  },
  {
    itemNo: '007',
    name: 'Prawn Pappas (hot)',
    description: 'Prawns sauteed with green chilli, ginger, garlic and coconut in a spicy tamarind sauce.',
    price: 15,
    category: ['lunch', 'dinner', 'indian', 'seafood'],
    prepTime: 15,
    restaurantPrefix: 'TDA',
  },
  {
    itemNo: '008',
    name: 'Lamb Korma (mild)',
    description: 'Lamb cooked in a thick and aromatic sauce with ground cashews and mild spices.',
    price: 10.5,
    category: ['lunch', 'dinner', 'indian', 'lamb'],
    prepTime: 15,
    restaurantPrefix: 'TDA',
  },
];
​
MenuItem.insertMany(menu)
  .then(menu => {
    console.log('Success! Added ' + menu.length + ' dishes to the database');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });