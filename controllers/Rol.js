const Rol = require("../models/rol");

exports.crearRol = async (req, res) => {

    try {
        let rol;
     
        // Creamos
        rol = new Rol(req.body);

        await rol.save();
        res.send(rol);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRoles = async (req, res) => {

    try {

        const rol = await Rol.find();
        res.json(rol)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarRol = async (req, res) => {

    try {
        const { nombre, descripcion} = req.body;
        let rol = await Usuario.findById(req.params.id);

        if(!rol) {
            res.status(404).json({ msg: 'No existe el rol' })
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


exports.obtenerRol= async (req, res) => {

    try {
        let rol = await Rol.findById(req.params.id);

        if(!rol) {
            res.status(404).json({ msg: 'No existe el rol' })
        }
       
        res.json(rol);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRol= async (req, res) => {

    try {
        let rol = await Rol.findById(req.params.id);

        if(!rol) {
            res.status(404).json({ msg: 'No existe el rol' })
        }
       
        await Rol.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Rol eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}