// Rutas para ficha
const express = require('express');
const router = express.Router();
const fichaController = require('../controllers/FichaMedica');

// api/usaurios
router.post('/', fichaController.crearFicha);
router.get('/', fichaController.obtenerfichas);
router.get('/:id', fichaController.obtenerficha);
//router.post('/:id',fichaController.crearF)
module.exports = router;