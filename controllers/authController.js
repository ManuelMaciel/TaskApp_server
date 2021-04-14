const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
  //verificamos si hay errores
  const errores = validationResult(req);
  if(!errores.isEmpty()){
    return res.status(400).json({ errores: errores.array() })
  }

  //extraer el email y el password
  const { email, password } = req.body;

  try {
    //revisar si el usuario existe
    let usuario = await Usuario.findOne({ email })
    if(!usuario){
      return res.status(400).json({ msg: `El usuario ${email} no existe. `})
    }
    //si el usuario existe, se compara el password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    console.log(passCorrecto);
    if(!passCorrecto){
      return res.status(400).json({ msg: 'El password no es correcto'});
    }

    //Si el usuario existe y el password es igual al de la base de datos
    //se crea el payload
    const payload = {

    };

    jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 3600 //la firma expira en 1 hora
    }, (error, token) => {
      if(error) throw error;
      
      res.json({ token: token})
    })

  } catch (error) {
    console.log(error);
  }

}