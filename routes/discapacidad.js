// Rutas para discapacidad
const express = require('express');
const router = express.Router();
const dController = require('../controllers/Discapacidad');

// api/discapacidad
router.post('/', dController.crearD);
router.get('/', dController.obtenerDs);
router.get('/:id', dController.obtenerD);
router.delete('/:id', dController.eliminarD)
module.exports = router;