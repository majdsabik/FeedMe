const mongoose = require('mongoose');
const Employee = require('../models/Employee');

mongoose.connect('mongodb://localhost/FeedMe', {
  useNewUrlParser: true,
});

const employees = [
  {
    userName: 'Ritesh',
    password: '12345678',
    email: 'test@test.com',
  },
  {
    userName: 'Majd',
    password: '12345678',
    email: 'test1@test.com',
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
