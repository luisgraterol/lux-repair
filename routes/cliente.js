const express = require('express');
const router = express.Router();

const OrdenController = require('../controllers/orden');

// Routes are handled here
router.post('/cancelar-cita', (req, res, next) => {
    OrdenController.cancelar(req.body, (err) => {
        if (err)
            res.json({ success: false, msg: 'Se produjo un error al cancelar la cita.' });
        else
            res.json({ success: true, msg: 'Se canceló la cita exitosamente.' });
    });
});

module.exports = router;