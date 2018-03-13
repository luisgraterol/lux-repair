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

// Medoto que actualiza los datos de un usuario
controller.actualizarDatos = async function (data, callback) {
    try {
        const response = await Usuario.update(
            {
        Nombre: data.nombre,
        Snombre: data.seg_nombre,
        Apellido: data.apellido,
        Cedula: data.cedula,
        Email: data.email,
        Username: data.username,
        //Password: data.password
            },
            { where: { id: data.id } }  // Se busca por ID
            
        );

        callback(null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de empleado: ',err);
        callback(err);
    }
}


// Metodo utilizado para validar el usuario en config/passport.js
controller.getUserById = async function (id, callback) {
    try {
        let response = await Usuario.findById(id);
        let usuario = response.dataValues;
        let empleado = await Empleado.findById(id);

        if (empleado) { // Chequea si es un empleado
            // Agregar la informacion adicional al objeto retornado
            usuario.fechaNacimiento = empleado.dataValues.FechaNacimiento;
            usuario.sexo = empleado.dataValues.Sexo;

            // Chequear si es un administrador
            let esAdmin = await Administrador.findById(id);
            if (esAdmin) {
                usuario.rol = 'administrador';
                callback(null, usuario);
            }

            // Chequear si es un gerente
            let esGerente = await Gerente.findById(id);
            if (esGerente) {
                usuario.rol = 'gerente';
                callback(null, usuario);
            }

            // Chequear si es un mecanico
            let esMecanico = await Mecanico.findById(id);
            if (esMecanico) {
                usuario.rol = 'mecanico';
                callback(null, usuario);
            }

            // Si no se le ha asignado un rol
            usuario.rol = 'empleado';

            // Retornar el objeto
            callback(null, usuario);
        }
        else {
            let cliente = await Cliente.findById(id);

            if (cliente) { // Chequea si es un cliente
                usuario.rol = 'cliente';

                // Retornar el objeto
                callback(null, usuario);
            }
        }

    } catch (err) {
        console.log('Se produjo un error en getUserById(): ', err);
    }
}

// Metodo utilizado en el login para obtener los datos del usuario
controller.getUserByUsername = async function (username, callback) {
    try {
        let user = await Usuario.findOne({ where: { username }});
        callback(user.dataValues, null);
    } catch (err) {
        console.log('Se produjo un error en el login: ', err);
        callback(null, err);
    }
}

// Registra al usuario
controller.registrar = function (data, callback) {

    // Crea una instancia de Usuario no persistente
    let newUser = Usuario.build({
        Nombre: data.nombre,
        Snombre: data.seg_nombre,
        Apellido: data.apellido,
        Cedula: data.cedula,
        Email: data.email,
        Username: data.username,
        Password: data.password
    });

    bcrypt.genSalt(10, (err, salt) => {

        // Hashea la clave ingresada por el usuario
        bcrypt.hash(newUser.Password, salt, (err, hash) => {

            // Si se produjo un error lo lanza
            if (err) throw err;

            // Hashea la clave
            newUser.Password = hash;

            // Persiste el objeto usuario con todos sus datos
            newUser.save()
                .then(() => {

                    // Chequea el rol del usuario
                    if (data.rol === 'cliente') {
                        Cliente.create({ id: newUser.id });
                    } 
                    else if (data.rol === 'empleado') {
                        Empleado.create({ id: newUser.id });
                    }
                })
                .then(callback)

                // Imprime el error si se produjo alguno al agregar el usuario
                .catch(err => {
                    console.log('An error ocurred while running the addUser() method: ', err);
                    callback(null, err);
                });
        });
    });
}

// Genera la clave a partir del hash y la compara con la clave ingresada
controller.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports = controller;