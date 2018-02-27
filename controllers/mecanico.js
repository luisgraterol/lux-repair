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

// Metodo que retorna un arreglo de vehiculos con todos los datos pertinentes
controller.getVehiculos = async function (idMecanico, callback) {
    try {

        console.log('El ID del mecanico es: ', idMecanico);

        let response = await Orden.findAll({where: {Mecanico: idMecanico}});

        // Construye un arreglo unicamente con los datos necesarios
        let idVehiculos = response.map(resultado => resultado.dataValues.Vehiculo);

        console.log('Los ID de los vehiculos asignados a este mecanico son: ', idVehiculos);

        let resultado = await Vehiculo.findAll({where: { id: idVehiculos }});

        // Construye un arreglo unicamente con los datos necesarios
        let vehiculos = resultado.map(resultado => resultado.dataValues);

        console.log('Los vehiculos asignados a este mecanico son: ', vehiculos);


        // AGREGAR DATOS ADICIONALES A LOS VEHICULOS
        // Busca los nombres de las marcas de los vehiculos
        for (let i = 0; i < vehiculos.length; i++) {
            let response = await Marca.findById(vehiculos[i].Marca);
            vehiculos[i].Marca = response.dataValues.Nombre;
        }

        // Busca los nombres de los modelos de los vehiculos
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

            if (response) { // Solo agrega los datos si ese vehiculo tiene una orden activa
                vehiculos[i].Estado = response.dataValues.Estado;
                vehiculos[i].Servicio = response.dataValues.Servicio;
            }
        }

        console.log('Los vehiculos con sus datos son: ', vehiculos);

        // Retorna el arreglo
        callback(vehiculos, null);
    } catch (err) {
        callback(null, err);
    }
};

module.exports = controller;