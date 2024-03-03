import express from 'express';
import config from './config/config.js';
import productsRouter from './routes/products.router.js'
import mongoose from 'mongoose';


//Other imports...
import compression from 'express-compression';

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GZIP
app.use(compression())

// brotli
// app.use(compression(
//     { brotli: { enabled: true, zlib: {} } }
// ))

mongoose.connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conexión con la base de datos establecida");
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1);
  });

//Declare routers:
app.use("/api/products", productsRouter);


const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});