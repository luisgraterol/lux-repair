const express = require('express');
const router = express.Router();

// Routes are handled here
router.get('*', (req, res, next) => {
    res.send('This endpoint is yet to be developed.');
});

module.exports = router;