const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const connection = require('../config/database');

// Models
const User = require('../models/user');

// Controllers
const con_User = require('../controllers/user');
const con_Empleado = require('../controllers/empleado');
const con_Cliente = require('../controllers/cliente');

// Sincroniza los cambios en los modelos
connection.sync({ logging: false })

// Register
router.post('/register', (req, res, next) => {

    // Create a non-persistent instance of User (it is persisted in addUser() at 'controllers/user.js')
    let newUser = User.build({
        Nombre: req.body.nombre,
        Snombre: req.body.seg_nombre,
        Apellido: req.body.apellido,
        Cedula: req.body.cedula,
        Email: req.body.email,
        Username: req.body.username,
        Password: req.body.password
    });

    // Custom method implemented in controllers/user.js
    con_User.addUser(newUser, req.body.rol, (user, err) => {
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

    con_User.getUserByUsername(username, (err, user) => {
        if (err) throw err;

        if (!user)
            return res.json({success: false, msg: 'Usuario no registrado.'});

        // If there is a user
        con_User.comparePassword(password, user.Password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
                const token = jwt.sign(user, 'password', {
                    expiresIn: 604800 // 1 week in seconds
                });

                res.json({
                    success: true,
                    token: 'Bearer '+token,
                    user: {
                        id: user.id,
                        nombre: user.Nombre,
                        seg_nombre: user.Snombre,
                        apellido: user.Apellido,
                        cedula: user.Cedula,
                        email: user.Email,
                        username: user.Username
                    }
                });
            
            // If there is no match
            } else
                return res.json({success: false, msg: 'Clave incorrecta.'});
        });
    });
});

// Profile
// Autentica al usuario y retorna un objeto de usuario con todos sus datos corriendo la 
// funcion de passport y insertando los datos en req.user.
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({ user: req.user });
});

router.get('/vehiculos', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('En el backend el request es: ', req.user);

    con_Cliente.getVehiculos((vehiculos, err) => {
        console.log('El arreglo en el backend es: ', vehiculos);

        if (err) throw err;

        if (vehiculos) {
            res.json({
                userId: req.user.id,
                vehiculos: vehiculos
            });
        }
    });
});

router.post('/datos-empleado', (req, res, next) => {
    con_Empleado.actualizarDatos(req.body, (err) => {
        if (err) 
            res.json({ success: false, msg: 'Se produjo un error al actualizar sus datos.' });
        else 
            res.json({ success: true, msg: 'Se actualizaron sus datos exitosamente.' });
    });
});

module.exports = router;