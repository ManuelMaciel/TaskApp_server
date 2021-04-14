const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
//crea un proyecto
// api/proyectos
router.post('/', 
  proyectoController.CrearProyecto
);

module.exports = router;