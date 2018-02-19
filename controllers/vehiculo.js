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

            // Si no se ha registrado ningun vehiculo con esa serial
            if (resultados == null) {

                Marca.findOne({ where: { Nombre: data.Marca } })
                    .then(resultadoMarca => {

                        Modelo.findOne({ where: { Nombre: data.Modelo } })
                            .then(resultadoModelo => {
                                
                                Vehiculo.create(
                                    {   
                                        Cliente: data.idCliente,
                                        Serial: data.Serial,
                                        Marca: resultadoMarca.dataValues.id,
                                        Modelo: resultadoModelo.dataValues.id,
                                        Placa: data.Placa,
                                        Color: data.Color,
                                        esAutomatico: data.EsAutomatico,
                                        esUnicoDueno: data.EsUnicoDueno,
                                        Ano: data.Ano,
                                        NroPuertas: data.NroPuertas
                                    }
                                );
                            });
                    });               
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

controller.eliminar = async function (data, callback) {
    Vehiculo.update(
        {
            Activo: false
        },
        {
            where: { id: data.id }
        }
    )
    .then(result => {
        callback(null);
    })
    .catch(err => {
        callback(err);
    });
}

module.exports = controller;