const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Modelo
const Modelo = connection.define('Modelo',
    {
        Nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        Marca: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        }
    },
    {
        freezeTableName: true
    });

module.exports = Modelo;