const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Empleado
const Empleado = connection.define('Empleado', 
{
    FechaNacimiento: {
        type: Sequelize.DATE,
        defaultValue: null,
        validate: {
            isDate: true,
            isAfter: '1900-01-01'
        }
    },
    Sexo: {
        type: Sequelize.STRING,
        defaultValue: null,
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