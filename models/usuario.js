const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
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
    },
    rol:{
        type: String,
        required: false
    },
    fichaMedica: [{
        ref: "FichaMedica",
        type: Schema.Types.ObjectId
    }]
});

module.exports = model('Usuario', UsuarioSchema);