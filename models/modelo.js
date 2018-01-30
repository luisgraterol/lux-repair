const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de un Modelo
const Modelo = connection.define('Modelo',
    {
        Nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        }
    },
    {
        freezeTableName: true
    });

module.exports = Modelo;