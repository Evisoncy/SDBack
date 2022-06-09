const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);