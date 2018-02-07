const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const User = require('../models/user');
const Cliente = require('../models/cliente');
const Empleado = require('../models/empleado');

const controller = {};

controller.actualizarDatos = function(data, callback) {
    Empleado.update(
        {
            FechaNacimiento: data.fechaNacimiento,
            Sexo: data.sexo
        },
        { where: { id: data.id } }
    )
    .then(result => {
        callback(null);
    })
    .catch(err => {
        callback(err);
    }
)};

module.exports = controller;