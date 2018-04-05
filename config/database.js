const Sequelize = require('sequelize');

// Create the connection to the database
const connection = new Sequelize('va8mkqflxfvtc8kh', 'raah7c6pyub8rmvw', 'li14re6n0lhfv5oq', {
  host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
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
