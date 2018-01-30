const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de una Orden
const Orden = connection.define('Orden', 
{

    //AQUI FALTA COLOCAR EL  CODIGO QR 
    Condicion: {
        type: Sequelize.STRING(1500),
        allowNull: false,

        validate: {
            isAlphanumeric: true,
            notEmpty: true
        }
    },
    Motivo: {
        type: Sequelize.STRING(1500),
        allowNull: false,

        validate: {
            isAlphanumeric: true,
            notEmpty: true
        }
    },
  
    Fecha_solicitud: {
        type: Sequelize.DATE ,
        allowNull: false,

        validate: {
            isDate: true,
            notEmpty: true
        }
    },

    Fecha_admision: {
        type: Sequelize.DATE ,
        allowNull: false,

        validate: {
            isDate: true,
            notEmpty: true
        }
    },
    Fecha_finalizacion: {
        type: Sequelize.DATE ,
        allowNull: false,

        validate: {
            isDate: true,
            notEmpty: true
        }
    },
},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Orden;