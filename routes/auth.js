//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

//verifica si existen los datos
// api/auth
router.post('/', 
  [
    check('email', 'El email no esta registrado').isEmail(),
    check('password', 'El password no es correcto').isLength({ min: 6 })
  ],
  authController.autenticarUsuario
);

module.exports = router;