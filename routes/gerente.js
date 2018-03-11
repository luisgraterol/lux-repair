const express = require('express');
const router = express.Router();

const GerenteController = require('../controllers/gerente');
const OrdenController = require('../controllers/orden');

// Obtiene todos los vehiculos activos
router.get('/vehiculos-y-mecanicos', (req, res, next) => {
    GerenteController.getVehiculosConMecanico((data, err) => {
        if (err) throw err;

        if (data) {
            res.json({
                vehiculos: data.vehiculos,
                mecanicos: data.mecanicos
            });
        }
    });
});

// Asignar la fecha de admision de un vehiculo
router.post('/asignar-mecanico', (req, res, next) => {
    OrdenController.asignarMecanico(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al asignar el mecánico.' });
        else
            res.json({ success: true, msg: 'El mecánico se asignó exitosamente.' });
    });
});

module.exports = router;