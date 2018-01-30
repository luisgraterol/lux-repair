const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de un Usuario
const Empleado = connection.define('Empleado', 
{

},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Empleado;