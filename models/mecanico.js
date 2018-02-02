const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Mecanico
const Mecanico = connection.define('Mecanico',
    {

    },
    {
        freezeTableName: true,
        timestamps: false
    });

module.exports = Mecanico;