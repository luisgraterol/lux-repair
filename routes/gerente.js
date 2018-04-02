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

// Asignar la fecha de admision de un vehiculo
router.post('/reporte-mecanico', (req, res, next) => {
    OrdenController.getReporteMecanico(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al hacer el reporte.' });
        else
            res.json({ success: true, msg: 'El reporte se  exitosamente.' });
    });
});



// Finalizar la reparacion de un vehiculo
router.post('/finalizar', (req, res, next) => {
    OrdenController.finalizar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al finalizar la orden.' });
        else
            res.json({ success: true, msg: 'Se finalizó la orden exitosamente.' });
    });
});

router.post('/qr', (req, res, next) => {
    OrdenController.obtener(req.body, (data, err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al obtener la orden a partir del QR.' });
        else
            res.json({ success: true, msg: 'Se obtuvo la orden exitosamente.', vehiculo: data });
    });
});

module.exports = router;