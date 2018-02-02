const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Administrador
const Administrador = connection.define('Administrador',
    {

    },
    {
        freezeTableName: true,
        timestamps: false
    });

module.exports = Administrador;