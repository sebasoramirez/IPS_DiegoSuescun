const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteController");

module.exports = function(){

    /* Ruta principal */
    router.get("/",(req,res)=>{res.send("Bienvenido")})
    /* -----------PACIEN,TES--------- */
    /* Agregar un nuevo paciente */
    router.post("/pacientes",pacienteController.NuevoPaciente);
    /* Cargar todos los pacientes*/
    router.get("/pacientes",pacienteController.CargarTodos);
    /* Cargar un solo paciente */
    router.get("/pacientes/:id",pacienteController.CargarPaciente);
    /* Editar paciente */
    router.put("/pacientes/:id",pacienteController.EditarPaciente);
    /* Eliminar paciente */
    router.delete("/pacientes/:id",pacienteController.EliminarPaciente);

    return router;

};


