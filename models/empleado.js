const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de un Empleado
const Empleado = connection.define('Empleado', 
{
    FechaNacimiento: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            isAfter: '1900-01-01'
        }
    },
    Sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            isIn: [['Masculino', 'Femenino', 'Otro']]
        }
    }
},
{
    freezeTableName: true
});

module.exports = Empleado;