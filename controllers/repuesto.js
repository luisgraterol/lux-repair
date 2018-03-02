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

// Metodo que retorna un arreglo de repuestos con todos los datos pertinentes
// controller.getRepuestos = function (idCliente, callback) {
//     Repuesto.findAll().then(resultado => {
//         let repuestos = resultado.map(repuesto => repuesto.dataValues);
//     }).catch();
// };

controller.getRepuestos = async function (idCliente, callback) {
    try {
        let response = await Repuesto.findAll();
        let repuestos = response.map(repuesto => repuesto.dataValues);
        console.log('Retornaron los sigueintes datos',repuestos);
        // Retorna el arreglo
        callback(repuestos, null);
    } catch (err) {
        callback(null, err);
    }
};

module.exports = controller;