const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const connection = require('../config/database');

// Models
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {

    // Create a non-persistent instance of User (it is persisted in addUser())
    let newUser = User.build({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    // Custom method implemented in models/user.js
    User.addUser(newUser, (user, err) => {
        if (err)
            res.json({success: false, msg: 'Failed to register user'});
        else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;

        if (!user)
            return res.json({success: false, msg: 'Usuario no registrado.'});

        // If there is a user
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;

            console.log(user);

            if (isMatch) {
                const token = jwt.sign(user, connection.config.password, {
                    expiresIn: 604800 // 1 week in seconds
                });

                res.json({
                    success: true,
                    token: 'Bearer '+token,
                    user: {
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        email: user.email
                    }
                });
            
            // If there is no match
            } else
                return res.json({success: false, msg: 'Clave incorrecta.'});
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user})
});

module.exports = router;