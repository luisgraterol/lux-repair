const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const User = require('../models/user');
const Cliente = require('../models/cliente');
const Empleado = require('../models/empleado');

const controller = {};

// Medoto que actualiza los datos de un empleado
controller.actualizarDatos = async function (data, callback) {
    try {
        const response = await Empleado.update(
            {
                FechaNacimiento: data.fechaNacimiento,
                Sexo: data.sexo
            },
            { where: { id: data.id } }  // Se busca por ID
        );

        callback(null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de empleado: ',err);
        callback(err);
    }
}

module.exports = controller;