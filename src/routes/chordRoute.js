const express = require('express');
const router = express.Router();
const controller = require('../controllers/chordController')

router.get('/:key', controller.getByType);
router.get('/:key/:type', controller.getByType);

module.exports = router;