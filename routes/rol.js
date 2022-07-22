// Rutas para rol
const express = require('express');
const router = express.Router();
const rolController = require('../controllers/Rol');

// 
router.post('/', rolController.crearRol);
router.get('/', rolController.obtenerRoles);
router.get('/:id', rolController.obtenerRol);
router.delete('/:id', rolController.eliminarRol)
module.exports = router;