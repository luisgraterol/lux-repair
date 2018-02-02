const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Modelos Utilizados
const Cliente = require('../models/cliente');
const Empleado = require('../models/empleado');



const controller = {};

controller.getUserById = function (id, callback) {
    User.findOne({ where: { id: id } })
        .then((user) => {
            callback(null, user.dataValues);
        })
        .catch((err) => console.error('An error ocurred while running the getUserById() method: ' + err));
}

controller.getUserByUsername = function (username, callback) {
    User.findOne({ where: { username: username } })
        .then((user) => {
            if (user)
                callback(null, user.dataValues);
            else
                callback(null, null);
        })
        .catch((err) => {
            console.error('An error ocurred while running the getUserByUsername() method: ' + err);
            callback(err, null);
        });
}

controller.addUser = function (newUser, rol, callback) {
    bcrypt.genSalt(10, (err, salt) => {

        // Hash the password provided by the user
        bcrypt.hash(newUser.Password, salt, (err, hash) => {

            // Catch an error while hashing
            if (err) throw err;

            // Hash the password
            newUser.Password = hash;

            // Persist the user in the database
            newUser.save()
                .then(() => {

                    // Checkear el rol
                    if (rol === 'cliente') {
                        Cliente.create({ id: newUser.id });
                    } 
                    else if (rol === 'empleado') {
                        // No se crea todavia puesto que falta obtener los datos adicionales del empleado: sexo y fecha de nacimiento.
                    }
                })
                .then(callback)

                // Catch an error while adding the user
                .catch(err => console.error('An error ocurred while running the addUser() method: ', err));
        });
    });
}

controller.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports = controller;