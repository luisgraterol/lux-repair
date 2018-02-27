const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const Repuesto = require('../models/repuesto');

const controller = {};

controller.registrar = async function (data, callback) {
    try {
        const response = await Repuesto.create({
            Nombre: data.Nombre,
            Descripcion: data.Descripcion,
            Detalle: data.Detalle,
            Cantidad: data.Cantidad,
            Tipo: data.Tipo,
            Disponibilidad: true
        });

        callback(null);
        
    } catch (err) {
        console.log('Se produjo un error en el controlador del repuesto: ', err);
        callback(err);
    }
}

module.exports = controller;