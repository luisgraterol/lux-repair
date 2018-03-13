const express = require('express');
const router = express.Router();

const RepuestoController = require('../controllers/repuesto');

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

module.exports = router;