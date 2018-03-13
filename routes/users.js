const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Models
const User = require('../models/user');

// Controllers
const con_User = require('../controllers/user');
const con_Empleado = require('../controllers/empleado');
const con_Cliente = require('../controllers/cliente');
const con_Gerente = require('../controllers/gerente');
const con_Vehiculo = require('../controllers/vehiculo');
const con_Orden = require('../controllers/orden');
const con_Repuesto = require('../controllers/repuesto');
const con_Mecanico = require('../controllers/mecanico');

/* PETICIONES GET */
// Registra al usuario
router.post('/register', (req, res, next) => {
    con_User.registrar(req.body, (user, err) => {
        if (err)
            res.json({success: false, msg: 'Failed to register user'});
        else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

// Autentica al usuario en el ingreso al sistema
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    con_User.getUserByUsername(username, (user, err) => {
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
// Autentica al usuario y retorna un objeto de usuario con todos sus datos corriendo la funcion de passport e insertando los datos en req.user.
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({ user: req.user });
});

// Obtiene los vehiculos de un cliente con todos sus datos
router.get('/vehiculos', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    con_Cliente.getVehiculos(req.user.id, (vehiculos, err) => {
        if (err) throw err;

        if (vehiculos) {
            res.json({
                userId: req.user.id,
                vehiculos
            });
        }
    });
});


// Obtiene los repuestos
router.get('/repuestos', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('REQ: ', req.user.id)

    con_Repuesto.getRepuestos(req.user.id, (repuestos, err) => {
        if (err) throw err;

        if (repuestos) {
            res.json({
                userId: req.user.id,
                repuestos
            });
        }
    });
});

// Obtiene los empleados sin un rol asignado
router.get('/empleados', (req, res, next) => {
    con_Empleado.getEmpleadosSinRol((empleados, err) => {
        if (err) throw err;

        if (empleados) {
            res.json({
                empleados
            });
        }
    });
});

// Obtiene todos los vehiculos activos
router.get('/vehiculos-gerente', (req, res, next) => {
    con_Gerente.getVehiculos((vehiculos, err) => {
        if (err) throw err;

        if (vehiculos) {
            res.json({
                vehiculos
            });
        }
    });
});


/* PETICIONES POST */
// Actualiza los datos de un empleado
router.post('/datos-empleado', (req, res, next) => {
    con_Empleado.actualizarDatos(req.body, (err) => {
        if (err) 
            res.json({ success: false, msg: 'Se produjo un error al actualizar sus datos.' });
        else 
            res.json({ success: true, msg: 'Se actualizaron sus datos exitosamente.' });
    });
});




// Actualiza los datos de un cliente
router.post('/datos-clientes', (req, res, next) => {
   con_User.actualizarDatos(req.body, (err) => {
        if (err) 
            res.json({ success: false, msg: 'Se produjo un error al actualizar sus datos.' });
        else 
        
            res.json({ success: true, msg: 'Se actualizaron sus datos exitosamente.' });

    });
});



// Registra un vehiculo nuevo
router.post('/registrar-vehiculo', (req, res, next) => {
    con_Vehiculo.registrar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al registrar el vehículo, inténtelo de nuevo.' });
        else
            res.json({ success: true, msg: 'Se registró el vehículo exitosamente.' });
    });
});

// Desactiva un vehiculo
router.post('/eliminar-vehiculo', (req, res, next) => {
    con_Vehiculo.eliminar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al eliminar su vehículo.' });
        else
            res.json({ success: true, msg: 'Su vehículo se eliminó con éxito.' });
    });
});

// Generar una orden de reparacion
router.post('/solicitar-orden', (req, res, next) => {
    con_Orden.solicitar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al solicitar su orden de reparación.' });
        else
            res.json({ success: true, msg: 'Su orden se generó con éxito.' });
    });
});
//actualizar orden de reparacion
router.post('/actualizar-reparacion', (req, res, next) => {
    con_Empleado.actualizarOrden(req.body, (err) => {
        if (err) 
            res.json({ success: false, msg: 'Se produjo un error al actualizar la Orden' });
        else 
            res.json({ success: true, msg: 'Se actualizo la orden  exitosamente.' });
    });
});


// Registra un repuesto nuevo
router.post('/crear-repuesto', (req, res, next) => {
    con_Repuesto.registrar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al registrar el repuesto, inténtelo de nuevo.' });
        else
            res.json({ success: true, msg: 'Se registró el repuesto exitosamente.' });
    });
});

// modifica un repuesto
router.post('/modificar-repuesto', (req, res, next) => {
    con_Repuesto.modificarRepuesto(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al registrar el repuesto, inténtelo de nuevo.' });
        else
            res.json({ success: true, msg: 'Se registró el repuesto exitosamente.' });
    });
});

// Asignar el rol a un empleado
router.post('/asignar-rol', (req, res, next) => {
    con_Empleado.asignarRol(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al asignar el rol.' });
        else
            res.json({ success: true, msg: 'El rol se asignó exitosamente.' });
    });
});

// Obtiene la informacion de un cliente
router.post('/cliente', (req, res, next) => {
    con_User.getUserById(req.body.idCliente, (err, cliente) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al buscar los datos del dueño.' });
        else
            res.json({ success: true, msg: 'Se buscaron los datos del cliente exitosamente.', cliente });
    });
});

// Asignar la fecha de admision de un vehiculo
router.post('/fecha-admision', (req, res, next) => {
    con_Orden.asignarAdmision(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al asignar la fecha de admisión.' });
        else
            res.json({ success: true, msg: 'Las fechas de admisión se asignaron exitosamente.' });
    });
});

// Obtiene los vehiculos asignados a un mecanico
router.post('/vehiculos-mecanico', (req, res, next) => {
    con_Mecanico.getVehiculos(req.body.id, (vehiculos, err) => {
        if (err) throw err;

        if (vehiculos) {
            res.json({
                vehiculos
            });
        }
    });
});

// Agrega condicion de entrega
router.post('/condicion-entrega', (req, res, next) => {
    con_Orden.condicionEntrega(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al agregar condicion de entrega, inténtelo de nuevo.' });
        else
            res.json({ success: true, msg: 'Se agrego condicion de entrega exitosamente.' });
    });
});

module.exports = router;