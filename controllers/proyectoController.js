//importar el modelo de proyecto
const Proyecto = require('../models/Proyecto');

exports.CrearProyecto = async (req, res) => {
  try {
    //Creamos un nuevo proyecto
    let proyecto = new Proyecto(req.body);

    //Guardamos el usuario via JWT
    proyecto.creador = req.usuario.id;
    //Guardamos el proyecto
    proyecto.save();
    res.json(proyecto);

  } catch (error) {
    console.log(error);
    return res.status(500).message('Hubo un error')
  }
}