const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const User = require('../models/user');
const Cliente = require('../models/cliente');
const Vehiculo = require('../models/vehiculo');
const Modelo = require('../models/modelo');
const Marca = require('../models/marca');
const Orden = require('../models/orden');

const controller = {};

controller.getVehiculos = async function (idCliente, callback) {
    try {
        let response = await Vehiculo.findAll({where: { Cliente: idCliente }});
        let vehiculos = [];

        // Construye un objeto con los datos unicamente
        for (let i=0; i<response.length; i++) {
            vehiculos.push(response[i].dataValues);
        }

        // Busca los nombres correspondientes a las marcas de los vehiculos
        for (let i = 0; i < vehiculos.length; i++) {
            let response = await Marca.findById(vehiculos[i].Marca);
            vehiculos[i].Marca = response.dataValues.Nombre;
        }

        // Busca los nombres correspondientes a los modelos de los vehiculos
        for (let i = 0; i < vehiculos.length; i++) {
            let response = await Modelo.findById(vehiculos[i].Modelo);
            vehiculos[i].Modelo = response.dataValues.Nombre;
        }

        // Agrega los datos de la orden de cada vehiculo, en el caso de tenerla
        for (let i = 0; i < vehiculos.length; i++) {
            let response = await Orden.findOne({
                where: { 
                    Vehiculo: vehiculos[i].id,
                    Activa: true
                },
                attributes: ['Estado', 'Servicio']
            });

            if (response) {
                vehiculos[i].Estado = response.dataValues.Estado;
                vehiculos[i].Servicio = response.dataValues.Servicio;
            }
        }

        console.log('El controlador mando el objeto:', vehiculos);

        // Retorna los resultados
        callback(vehiculos, null);

    } catch (err) {
        callback(null, err);
    }
};

module.exports = controller;