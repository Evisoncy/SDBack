const { Schema, model } = require('mongoose')

const incidenciaSchema = new Schema({

    titulo:  {
        type: String,
        required:true
    },
    descripcion: {
        type:String,
        required: true
    },
 
    fecha: {
        type: String,
        required:true
    },
    lugar:{
        type: String,
        required:true
    }
    
})

module.exports = model('Incidencia',incidenciaSchema)