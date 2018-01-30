const Sequelize = require('sequelize');

// Create the connection to the database
const connection = new Sequelize('luxrepairDB', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

// Validate the connection and log the result
connection
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;
