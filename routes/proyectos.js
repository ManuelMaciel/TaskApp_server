const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
//crea un proyecto
// api/proyectos
router.post('/', 
  auth,
  proyectoController.CrearProyecto
);

module.exports = router;