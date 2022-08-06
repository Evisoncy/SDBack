// Rutas para incidencia
const express = require('express');
const router = express.Router();
const incidenciaController = require('../controllers/Incidencia');

// api/incidnecia
router.post('/', incidenciaController.crearIncidencia);
router.get('/:id', incidenciaController.obtenerIncidencia)


module.exports = router;