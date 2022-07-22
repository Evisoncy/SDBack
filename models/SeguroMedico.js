const { Schema, model } = require('mongoose')

const seguroMedicoSchema = new Schema({
    UNMSM:{
        type:Boolean
    },
    MINSA:{
        type:Boolean
    },
    ESSALUD:{
        type:Boolean
    },
    EPS:[ //PÚBLICO O PRIVADO
        String //SEGÚN EL TIPO, ALMACENA EL CORRESPONDIENTE: SIS, EsSalud, Rimac,etc
    ]
})

module.exports = model('SeguroMedico', seguroMedicoSchema)