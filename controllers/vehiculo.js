const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const User = require('../models/user');
const Cliente = require('../models/cliente');
const Vehiculo = require('../models/vehiculo');
const Marca = require('../models/marca');
const Modelo = require('../models/modelo');

const controller = {};

controller.registrar = function (data, callback) {

    console.log('Al controlador llego:\n', data);

    Vehiculo.findOne({ where: { Serial: data.Serial } })
        .then(resultados => {
            console.log('Los resultados el findOne que revisa si ya existe dicho vehiculo son:\n', resultados);

            // Si no se ha registrado ningun vehiculo con esa serial
            if (resultados == null) {

                /* 
                LOGICA DE MANEJO DEL REGISTRO DEL VEHICULO
                    1. Primero, se debe revisar si la marca ingresada ya esta registrada en la tabla Marca.
                        1.1 En caso de estar registrada, simplemente se obtiene su ID y se guarda en una variable idMarca.
                        1.2 En caso de no estar registrada, se agrega la marca nueva en la tabla Marca y se obtiene su ID.
                    2. Segundo, se debe revisar si el modelo ingresado ya esta registrado en la tabla Modelo.
                        2.1 En caso de estar registrado, simplemente se obtiene su ID y se guarda en una variable idModelo.
                        2.2 En caso de no estar registrado, se agrega el nuevo modelo en la tabla Modelo y se obtiene su ID.
                    3. Luego, una vez que ya se tienen guardados los ID de la marca y del modelo, se deben insertar los datos
                       del nuevo vehiculo en la DB.

                    Chequea los docs de Sequelize. El link esta al final del README del proyecto.
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