const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Gerente
const Gerente = connection.define('Gerente',
    {
        
    },
    {
        freezeTableName: true,
        timestamps: false
    });

module.exports = Gerente;