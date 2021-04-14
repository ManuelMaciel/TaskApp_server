const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const conectarDB = async () => {

  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log(`la base de datos de se conecto a ${process.env.DB_MONGO}`);
  } catch (error) {
    console.log(error);
    process.exit(1); //detiene la app
  }

}

module.exports = conectarDB;