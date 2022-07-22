const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/ficha', require('./routes/ficha'));
app.use('/api/rol', require('./routes/rol'));
app.use('/api/discapacidad', require('./routes/discapacidad'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('El servidor esta corriendo perfectamente en el puerto',PORT)
})