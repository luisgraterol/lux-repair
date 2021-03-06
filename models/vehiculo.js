const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Vehiculo
const Vehiculo = connection.define('Vehiculo', 
{
    Cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    Serial: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

        validate: {
            isAlphanumeric: true,
            notEmpty: true
        }
    },
    Marca: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    Modelo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    Placa: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlphanumeric: true,
            notEmpty: true
        }
    },
    Color: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    esAutomatico: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,

        validate: {
            notEmpty: true
        }
    },
    esUnicoDueno: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,

        validate: {
            notEmpty: true
        }
    },
    Ano: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
            min: 1900,
            notEmpty: true
        }
    },
    NroPuertas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5,

        validate: {
            notEmpty: true,
            min: 3,
            max: 7
        }
    },
    Activo: {
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

module.exports = Vehiculo;