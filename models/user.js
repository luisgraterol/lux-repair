const Sequelize = require('sequelize');
const connection = require('../config/database');
const bcrypt = require('bcryptjs');

// Modelo de un Usuario
const User = connection.define('Usuario', {
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Snombre: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Apellido: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    Cedula: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
            isInt: {
                msg: 'La cedula ingresada es inválida.'
            }
        }
    }
},

{
    timestamps: false,
    freezeTableName: true
});

module.exports = User;

// Custom methods available in the exported model
module.exports.getUserById = function(id, callback) {
    User.findOne({where: { id: id }})
        .then((user) => {
            callback(null, user.dataValues);
        })
        .catch((err) => console.error('An error ocurred while running the getUserById() method: ' + err));
}

module.exports.getUserByUsername = function(username, callback) {
    User.findOne({where: { username: username }})
        .then((user) => {
            if(user)
                callback(null, user.dataValues);
            else
                callback(null, null);
        })
        .catch((err) => {
            console.error('An error ocurred while running the getUserByUsername() method: ' + err);
            callback(err, null);
        });
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {

        // Hash the password provided by the user
        bcrypt.hash(newUser.password, salt, (err, hash) => {

            // Catch an error while hashing
            if (err) throw err;

            // Hash the password
            newUser.password = hash;

            // Persist the user in the database
            newUser.save()
                .then(callback)

                // Catch an error while adding the user
                .catch(err => console.error('An error ocurred while running the addUser() method: '));
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}