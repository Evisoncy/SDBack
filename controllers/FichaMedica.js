const Ficha = require("../models/FichaMedica");
const Usuario = require("../models/usuario");


exports.crearFicha = async (req, res) => {
    /*const { diagnostico, tipoSangre, medicamentoHabitual, medicamentoAlergico,seguroMedico,anio, correo } = req.body;

    const formficha = new Ficha({
        diagnostico,
        tipoSangre,
        medicamentoHabitual,
        medicamentoAlergico,
        seguroMedico,
        anio
    });
  
    const usuario = await Usuario.findOne({ correo });
  
    if (!usuario) {
      return res
        .status(400)
        .json({ message: `${correo} no está registrado en la Base de Datos` });
    }
  
    const ficha = await formficha.save();
  
    usuario.fichaMedica.push(ficha);
    const sv_usuario = await usuario.save();
  
    res.status(200).json({
      error: false,
      message: "La Ficha fue creada correctamente",
      sv_usuario,
    });*/
   try {
        let ficha;  
      
        ficha = new Ficha(req.body);
        await ficha.save(function (err, book) {
            if (err) return console.error(err);
            console.log(book.name + " saved to bookstore collection.");
          });
        res.send(ficha);
       
        
    } catch (error) {
        
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerfichas = async (req, res) => {

    try {

        const fichas = await Ficha.find();
        res.json(fichas)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerficha = async (req, res) => {

    try {
        let ficha = await Ficha.findById(req.params.id);

        if(!ficha) {
            res.status(404).json({ msg: 'No existe la ficha' })
        }
       
        res.json(ficha);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
