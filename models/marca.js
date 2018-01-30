const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de un Usuario
const Marca = connection.define('Marca', 
{
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlphanumeric: true,
            notEmpty: true
        }
    },
},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Marca;