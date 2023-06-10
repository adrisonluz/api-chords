const express = require('express');
const router = express.Router();
const controller = require('../controllers/noteController')

router.get('/', controller.get);
router.get('/:key', controller.getByKey);

module.exports = router;