const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Orden
const Orden = connection.define('Orden', 
{
    Vehiculo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    Estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Sin Cita',

        validate: {
            notEmpty: true
        }
    },
    Servicio: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Sin Servicio',

        validate: {
            notEmpty: true
        }
    },
    Detalle: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'N/A',

        validate: {
            notEmpty: true
        }
    },
    Evaluacion: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Por evaluar',

        validate: {
            notEmpty: true
        }
    },
    FechaSolicitud: {
        type: Sequelize.DATE,
        allowNull: false,

        validate: {
            isDate: true,
            notEmpty: true
        }
    },

    FechaAdmision: {
        type: Sequelize.DATE,

        validate: {
            isDate: true
        }
    },
    FechaFinalizacion: {
        type: Sequelize.DATE,

        validate: {
            isDate: true
        }
    },
    Activa: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,

        validate: {
            notEmpty: true
        }
    }
},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Orden;