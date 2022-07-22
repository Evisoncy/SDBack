const Dis = require("../models/Discapacidad");

exports.crearD = async (req, res) => {

    try {
        let d;
        
        // Creamos
        d = new Dis(req.body);

        await d.save();
        res.send(d);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerDs = async (req, res) => {

    try {

        const d = await Dis.find();
        res.json(d)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarD = async (req, res) => {

    try {
        const { nombre, descripcion} = req.body;
        let rol = await Usuario.findById(req.params.id);

        if(!rol) {
            res.status(404).json({ msg: 'No existe el discapacidad' })
        }

        rol.nombre = nombre;
        rol.descripcion = descripcion;

        rol = await Rol.findOneAndUpdate({ _id: req.params.id },rol, { new: true} )
        res.json(rol);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerD= async (req, res) => {

    try {
        let d = await Dis.findById(req.params.id);

        if(!d) {
            res.status(404).json({ msg: 'No existe el discapacidad' })
        }
       
        res.json(d);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarD= async (req, res) => {

    try {
        let d = await Dis.findById(req.params.id);

        if(!d) {
            res.status(404).json({ msg: 'No existe el discapacidad' })
        }
       
        await Dis.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Discapacidad eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}