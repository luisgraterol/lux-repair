const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const Usuario = require('../models/user');
const Cliente = require('../models/cliente');
const Empleado = require('../models/empleado');
const Administrador = require('../models/administrador');
const Gerente = require('../models/gerente');
const Mecanico = require('../models/mecanico');

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

controller.getEmpleadosSinRol = async function (callback) {
    try {
        const response = await Empleado.findAll();

        // Construye un arreglo unicamente con los datos necesarios
        let empleados = response.map(resultado => resultado.dataValues.id);

        // Busca los datos de los empleados de cada rol
        const esAdmin = await Administrador.findAll();
        const esGerente = await Gerente.findAll();
        const esMecanico = await Mecanico.findAll();

        // Crea arreglos con los ID de todos los empleados de cada rol
        let admins = esAdmin.map(resultado => resultado.dataValues.id);
        let gerentes = esGerente.map(resultado => resultado.dataValues.id);
        let mecanicos = esMecanico.map(resultado => resultado.dataValues.id);

        // Filtra el arreglo de empleados para solo contener los que no tengan un rol asignado:
        empleados = empleados.filter(empleado => !admins.includes(empleado) && !gerentes.includes(empleado) && !mecanicos.includes(empleado));

        const resultadoFinal = await Usuario.findAll({where: { id: empleados }});

        // Construye un arreglo unicamente con los datos necesarios
        let usuarios = resultadoFinal.map(resultado => resultado.dataValues);

        // Retornar el arreglo
        callback(usuarios, null);

    } catch (err) {
        console.log('Se produjo un error en el controlador de empleado: ', err);
        callback(null, err);
    }
}

controller.asignarRol = async function (data, callback) {
    try {
        if (data.rol === 'mecanico') {
            let response = await Mecanico.create({id: data.id});
        }
        else if (data.rol === 'gerente') {
            let response = await Gerente.create({ id: data.id });
        }
        else if (data.rol === 'administrador') {
            let response = await Administrador.create({ id: data.id });
        }

        callback(null);

    } catch (err) {
        console.log('Se produjo un error al asignar el rol: ', err);
        callback(err);
    }
}

module.exports = controller;