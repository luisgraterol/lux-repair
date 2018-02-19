const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const Orden = require('../models/orden');

const controller = {};

controller.actualizarDatos = function (data, callback) {

    console.log('Al controlador llega: ', data);

    // Orden.create({})
};

module.exports = controller;