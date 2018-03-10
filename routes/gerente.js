const express = require('express');
const router = express.Router();

const GerenteController = require('../controllers/gerente');

// Obtiene todos los vehiculos activos
router.get('/vehiculos-sin-mecanico', (req, res, next) => {
    GerenteController.getVehiculosSinMecanico((vehiculos, err) => {
        if (err) throw err;

        if (vehiculos) {
            res.json({
                vehiculos
            });
        }
    });
});

module.exports = router;