// importar mongoose
const mongoose = require('mongoose');

//creamos el schema del proyecto
const ProyectoSchema = mongoose.Schema({

  nombre: {
    type: String,
    required: true,
    trim: true
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  creado: {
    type: Date,
    default: Date.now()
  }

})

//El primer parametro es el nombre del modelo seguido del Schema
module.exports = mongoose.model('Proyecto', ProyectoSchema)
