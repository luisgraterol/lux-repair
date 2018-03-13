const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de Cliente
const Orden_tiene_Rep = connection.define('Orden-tiene-Repuesto',
    {
        Orden: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Repuesto: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = Orden_tiene_Rep;