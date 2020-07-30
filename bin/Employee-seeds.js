const mongoose = require('mongoose');
const Employee = require('../models/Employee');

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const employees = [
  {
    userName: 'Ritesh',
    password: '12345678',
    email: 'test@test.com',
    restaurantPrefix: 'TDA',
  },
  {
    userName: 'Majd',
    password: '12345678',
    email: 'test1@test.com',
    restaurantPrefix: 'RIC',
  },
];

Employee.insertMany(employees)
  .then(employess => {
    console.log('Success! Added ' + employees.length + ' employees to the database');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
