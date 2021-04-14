//exportamos el modelo de usuario
const Usuario = require('../models/Usuario');
//exportamos el encriptador de password
const bcryptjs = require('bcryptjs');
//exportamos las validaciones
const { validationResult } = require('express-validator');
//exportamos jsonwebtoken
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {
  
  //Verifica si hay errores
  const errores = validationResult(req);
  if( !errores.isEmpty() ){
    return res.status(400).json({ errores: errores.array() })
  }

  //Extraer los datos de req.body
  const { nombre, email, password } = req.body

  try {

    //Revisar si el email es unico
    let usuario = await Usuario.findOne({ email });
    if(usuario){
      return res.status(400).json({ msg: `El usuario con el email ${email} ya existe.` });
    }

    //crea el nuevo usuario
    usuario = new Usuario(req.body);

    //hashear el password
    const salt = await bcryptjs.genSalt(10);
    usuario.password = await bcryptjs.hash(password, salt);

    //guarda el nuevo usuario
    await usuario.save();

    //crear el payload del JWT
    const payload = {
      usuario: {
        id: usuario.id
      }
    };

    //firmar el JWT
    jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 3600 //la autenticacion expira en 1 hora
    }, (error, token) => {
      if(error) throw error;
      //Mensaje de confirmacion
      res.json({ token: token });

    });

  } catch (error) {
    console.log(error);
    res.status(400).send(`Hubo un error de tipo ${error}`);
  }

}