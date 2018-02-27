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

        // console.log('Todos los empleados:', empleados);

        // Busca los datos de los empleados de cada rol
        const esAdmin = await Administrador.findAll();
        const esGerente = await Gerente.findAll();
        const esMecanico = await Mecanico.findAll();

        // Crea arreglos con los ID de todos los empleados de cada rol
        let admins = esAdmin.map(resultado => resultado.dataValues.id);
        let gerentes = esGerente.map(resultado => resultado.dataValues.id);
        let mecanicos = esMecanico.map(resultado => resultado.dataValues.id);

        // console.log('Admins: ', admins);
        // console.log('Gerentes: ', gerentes);
        // console.log('Mecanicos: ', mecanicos);

        // Filtra el arreglo de empleados para solo contener los que no tengan un rol asignado:
        empleados = empleados.filter(empleado => !admins.includes(empleado) && !gerentes.includes(empleado) && !mecanicos.includes(empleado));

        // console.log('Los empleados sin rol son: ', empleados);

        const resultadoFinal = await Usuario.findAll({where: { id: empleados }});

        // Construye un arreglo unicamente con los datos necesarios
        let usuarios = resultadoFinal.map(resultado => resultado.dataValues);

        console.log('El arreglo retornado es: ', usuarios);

        // Retornar el arreglo
        callback(usuarios, null);

    } catch (err) {
        console.log('Se produjo un error en el controlador de empleado: ', err);
    }
}

module.exports = controller;