const express = require('express');
const router = express.Router();

let OrdenController = require('../controllers/orden');

// Asignar la fecha de admision de un vehiculo
router.post('/actualizar-orden', (req, res, next) => {
    OrdenController.actualizar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al asignar el mecánico.' });
        else
            res.json({ success: true, msg: 'El mecánico se asignó exitosamente.' });
    });
});

module.exports = router;