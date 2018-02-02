const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Usuario
const User = connection.define('Usuario', 
{
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Snombre: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Apellido: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Cedula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,

        validate: {
            isInt: {
                msg: 'La cedula ingresada es inválida.'
            }
        }
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    }
},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = User;