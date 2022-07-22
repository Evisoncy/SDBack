const { Schema, model } = require('mongoose')

const fichaSchema = new Schema({

    diagnostico:  {
        type: String,
        required:true
    },
    tipoSangre: {
        type:String,
        required: true
    },
 
    medicamentoHabitual: {
        type: String,
        required:true
    },
    medicamentoAlergico:{
        type: String,
        required:true
    },
 
    seguroMedico: {
        type: String,
        required:true
    },
    anio:{
        type:Number
    },
    discapacidad:{
        type: String
    }
    
})

module.exports = model('FichaMedica',fichaSchema)