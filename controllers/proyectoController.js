//importar el modelo de proyecto
const Proyecto = require('../models/Proyecto');

exports.CrearProyecto = async (req, res) => {
  try {
    //Creamos un nuevo proyecto
    let proyecto = new Proyecto(req.body);
    proyecto.save();
    res.json(proyecto);
    console.log(proyecto)

  } catch (error) {
    console.log(error);
    return res.status(500).message('Hubo un error')
  }
}