const Incidencia = require("../models/Incidencia");
const Usuario = require("../models/usuario");

exports.crearIncidencia= async (req, res) => { 
    const { titulo, descripcion, fecha , lugar, correo } = req.body;
    const formIncidencia = new Incidencia({
        titulo,
        descripcion,
        fecha,
        lugar
    });
   
    const usuario = await Usuario.findOne({ correo });
    console.log(usuario)
    if (!usuario) {
      return res
        .status(400)
        .json({ message: `${correo} no está registrado en la Base de Datos` });
    }
  
    const incidencia = await formIncidencia.save();
  
    usuario.incidencia.push(incidencia);
    const sav_usuario = await usuario.save();
  
    res.status(200).json({
      error: false,
      message: "La Incidencia fue creada correctamente",
      sav_usuario,
    });
    
}

exports.obtenerIncidencia= async (req, res) => {

    try {
        let incidencia = await Incidencia.findById(req.params.id);
        console.log(incidencia)

        if(!incidencia) {
            res.status(404).json({ msg: 'No existe la incidencia' })
        }
       
        res.json(incidencia);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}