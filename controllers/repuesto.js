const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const Repuesto = require('../models/repuesto');
const Orden = require('../models/orden');
const Orden_tiene_Rep = require('../models/orden-tiene-repuesto');

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

controller.modificarRepuesto = async function (data, callback) {
    try {
        const response = await Repuesto.update(
            {
                Nombre: data.Nombre,
                Descripcion: data.Descripcion,
                Detalle: data.Detalle,
                Cantidad: data.Cantidad,
                Tipo: data.Tipo
            },
                { where: { id: data.id } }  // Se busca por ID
        );

        callback(null);
        
    } catch (err) {
        console.log('Se produjo un error en el controlador del repuesto: ', err);
        callback(err);
    }
}

// Metodo que retorna un arreglo de repuestos con todos los datos pertinentes
controller.getRepuestos = async function (callback) {
    try {
        let response = await Repuesto.findAll({
            order: [['Descripcion', 'ASC']]
        });
        let repuestos = response.map(repuesto => repuesto.dataValues);
        // Retorna el arreglo
        callback(repuestos, null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de los repuestos: ', err);
        callback(null, err);
    }
};

controller.getRepuestosPorVehiculo = async function (idVehiculo, callback) {
    try {
        let orden = await Orden.findOne({ where: { Vehiculo: idVehiculo, Activa: true } });
        let idOrden = orden.dataValues.id;

        let response = await Orden_tiene_Rep.findAll({ where: { Orden: idOrden } });
        let idRepuestos = response.map(repuesto => repuesto.dataValues.Repuesto);

        let repuestos = [];

        for (let i=0; i<idRepuestos.length; i++) {
            let buscarRepuesto = await Repuesto.findById(idRepuestos[i]);
            repuestos.push(buscarRepuesto.dataValues);
        }

        // Retorna el arreglo
        callback(repuestos, null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de los repuestos: ', err);
        callback(null, err);
    }
};

module.exports = controller;