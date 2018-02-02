const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Orden
const Orden = connection.define('Orden', 
{

    //AQUI FALTA COLOCAR EL  CODIGO QR 
    CondicionVehiculo: {
        type: Sequelize.STRING(1500),
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    Motivo: {
        type: Sequelize.STRING(1500),
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
  
    FechaSolicitud: {
        type: Sequelize.DATE ,
        allowNull: false,

        validate: {
            isDate: true,
            notEmpty: true
        }
    },

    FechaAdmision: {
        type: Sequelize.DATE ,
        allowNull: false,

        validate: {
            isDate: true,
            notEmpty: true
        }
    },
    FechaFinalizacion: {
        type: Sequelize.DATE ,
        allowNull: false,

        validate: {
            isDate: true,
            notEmpty: true
        }
    }
},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Orden;