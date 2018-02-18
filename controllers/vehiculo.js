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

                Marca.findOne({ where: { Marca: data.Marca } })
        .then(resultadoMarca => {
            console.log('Los resultados el findOne que busca marca es:\n', resultadoMarca);})

            Modelo.findOne({ where: { Modelo: data.Modelo } })
        .then(resultadoModelo => {
            console.log('Los resultados el findOne que busca modelo es:\n', resultadoModelo);})


              /*  vehiculo.update(
                    {
                        Serial: data.serial,
                        Placa: data.placa,
                        Color: data.color,
                        esAutomatico: data.esAutomatico,
                        esUnicoDueno: data.esUnicoDueno,
                        Ano: data.ano,
                        NroPuertas: data.nroPuertas,
                        Marca=resultadoMarca.id,
                        Modelo=resultadoModelo.id
                    }
                )
                  */
                /* 
                LOGICA DE MANEJO DEL REGISTRO DEL VEHICULO
                    
                        1.1 En caso de estar registrada, simplemente se obtiene su ID y se guarda en una variable idMarca.
                        
                    
                        2.1 En caso de estar registrado, simplemente se obtiene su ID y se guarda en una variable idModelo.
                      
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