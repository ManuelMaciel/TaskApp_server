const express = require('express');
//Importar la configuracion del db
const conectarDB = require('./config/db');

//Creamos el servidor
const app = express();

//Habilitar el express.json()
app.use(express.json({ extended: true }));

//Conectar la bbdd
conectarDB();

//Se crea el puerto
const PORT = process.env.PORT || 4000;

//Importar las rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

//Se inicia el server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})