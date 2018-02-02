const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Cliente
const Cliente = connection.define('Cliente',
    {

    },
    {
        freezeTableName: true
    });

module.exports = Cliente;