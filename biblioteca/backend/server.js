const path = require("path");
const dotenv = require("dotenv");
const express = require('express');
const cors = require('express');
const morgan = require('cors');
const connectdb = require('./config/db');

const authroutes = require('./routes/authroutes');
const bookroutes = require('./routes/bookroutes');

const app = express();

// Cargar el .env que está un nivel arriba de la carpeta actual
dotenv.config({
  path: path.resolve(__dirname, "../.env")
});

// Probar que sí carga la variable
console.log("DB URL:", process.env.DATABASE_URL);
connectdb();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authroutes);
app.use('/api/books', bookroutes);

app.get('/', (req, res,) =>{
    res.send('API de MI Biblioteca esta funcionando!');
});

app.use ((req, res, next) => {
    res.status(404).json({ message: 'ruta no encontrada'});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salio mal en el servidor!'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('servidor corriendo en el puerto ${PORT}'));
