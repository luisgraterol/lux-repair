const express = require('express');
const router = express.Router();

let OrdenController = require('../controllers/orden');
let MecanicoController = require('../controllers/mecanico');
let RepuestoController = require('../controllers/repuesto');

// Obtiene los vehiculos asignados a un mecanico
router.post('/vehiculos', (req, res, next) => {
    MecanicoController.getVehiculos(req.body.id, (vehiculos, err) => {
        if (err) throw err;

        if (vehiculos) {
            res.json({
                vehiculos
            });
        }
    });
});

// Actualiza una orden de reparacion
router.post('/actualizar-orden', (req, res, next) => {
    console.log(req.body)
    OrdenController.actualizar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al actualizar la orden de reparación.' });
        else
            res.json({ success: true, msg: 'La orden de reparación se actualizó exitosamente.' });
    });
});

// Obtiene los repuestos disponibles
router.get('/repuestos', (req, res, next) => {
    RepuestoController.getRepuestos((data, err) => {
        if (err) throw err;

        if (data) {
            res.json({
                repuestos: data
            });
        }
    });
});

// Obtiene los repuestos de la orden de un solo vehiculo
router.post('/repuestos-por-vehiculo', (req, res, next) => {
    RepuestoController.getRepuestosPorVehiculo(req.body.id, (data, err) => {
        if (err) throw err;

        if (data) {
            res.json({
                repuestos: data
            });
        }
    });
});

module.exports = router;