const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const User = require('../models/user');
const Cliente = require('../models/cliente');
const Vehiculo = require('../models/vehiculo');

const controller = {};

controller.registrar = function (data, callback) {

    console.log('Al controlador llego:\n', data);

    Vehiculo.findOne({ where: { Serial: data.Serial } })
        .then(resultados => {
            console.log('Los resultados el findOne que revisa si ya existe dicho vehiculo son:\n', resultados);

            // Si no se ha registrado ningun vehiculo con esa serial
            if (resultados == null) {

                /* 
                AQUI VA LA LOGICA DE MANEJO DEL REGISTRO DEL VEHICULO
                */
               
            }
            else {
                console.log('ERROR: El vehiculo ya esta registrado en la BD.');
            }
        })
        .then(result => {
            callback(null);
        })
        .catch(err => {
            callback(err);
        }
        )
};

module.exports = controller;