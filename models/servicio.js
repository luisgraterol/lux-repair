const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Servicio
const Servicio = connection.define('Servicio', 
{
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Descripcion: {
        type: Sequelize.STRING(1500),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    }
},
{
    freezeTableName: true
});

module.exports = Servicio;