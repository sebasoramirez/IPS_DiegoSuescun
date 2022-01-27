const Pacientes = require("../models/Paciente")

/* Se va a crear un nuevo paciente */
exports.NuevoPaciente = async(req,res,next)=>{
    const paciente = new Pacientes(req.body)
    try {
        await paciente.save();
        res.json({mensaje: "El paciente se ingreso con exito"})
    } catch (error) {
        console.log(error)
        next()
    }
};

/* Se va a cargar pacientes */
exports.CargarTodos = async(req,res,next)=>{
    
    try {

        const pacientes = await Pacientes.find({});
        res.json(pacientes)
    } catch (error) {
        console.log(error)
        next()
    }
};



/* Se va a cargar un solo paciente */
exports.CargarPaciente = async(req,res,next)=>{
    
    try {

        const paciente = await Pacientes.findById(req.params.id);
        res.json(paciente)
    } catch (error) {
        console.log(error)
        next()
    }
};


/* Se va a editar un  paciente */
exports.EditarPaciente = async(req,res,next)=>{
    
    try {
        
        const paciente = await Pacientes.findOneAndUpdate({
            _id:req.params.id},
            req.body,{new: true}
            
        )
        res.json(paciente)
    } catch (error) {
        res.send(error)
        next()
    }
};




/* Se va a cargar un solo paciente */
exports.EliminarPaciente = async(req,res,next)=>{
    
    try {
        const paciente = req.params.id;
        await Pacientes.findOneAndDelete({_id:paciente});
        res.json({mensaje: "El paciente se elimino con exito"})
    } catch (error) {
        console.log(error)
        next()
    }
};
