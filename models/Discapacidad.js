const { Schema, model } = require('mongoose')

const DiscapacidadSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

module.exports = model('Discapacidad', DiscapacidadSchema);