const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de un Repuesto
const Respuesto = connection.define('Repuesto', 
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
    },
    Cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
            isInt: true,
            notEmpty: true
        }
    },

    Tipo: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    Disponibilidad: {
        type: Sequelize.BOOLEAN,
        defaultValue:true,
        allowNull: false,

        validate: {
            
            notEmpty: true
        }
    },


},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Repuesto;