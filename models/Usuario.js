//Importar mongoose
const mongoose = require('mongoose');
//Definir el Schema
const UsuarioSchema = mongoose.Schema({
  //tipo de datos
  nombre: {
    //valores del campo
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  registro: {
    type: Date,
    default: Date.now()
  }

});

//El primer parametro es el nombre del modelo seguido del Schema
module.exports = mongoose.model('Usuario', UsuarioSchema)