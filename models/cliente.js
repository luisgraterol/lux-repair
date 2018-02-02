const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Cliente
const Cliente = connection.define('Cliente',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        freezeTableName: true
    }
);

module.exports = Cliente;