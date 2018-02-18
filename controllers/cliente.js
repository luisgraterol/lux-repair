const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const User = require('../models/user');
const Cliente = require('../models/cliente');
const Vehiculo = require('../models/vehiculo');
const Orden = require('../models/orden');

const controller = {};

controller.getVehiculos = function (callback) {
    Vehiculo.find()
        .then(result => {
            callback(result.dataValues, null);
        })
        .catch(err => {
            callback(null, err);
        });
};

module.exports = controller;