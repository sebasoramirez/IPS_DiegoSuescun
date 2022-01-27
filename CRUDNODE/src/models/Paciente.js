const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PacienteSchema = new Schema({ 
    fechaIngreso:{
        type:String,
        trim:true
    },
    nombre:{
        type:String,
        trim:true
    },
    apellidos:{
        type:String,
        trim:true
    },
    tipoDocumento:{
        type:String,
        trim:true
    },
    documento:{
        type:String,
        trim:true,
        unique:true
    },
    fechaNacimiento:{
        type:String,
        trim:true
    },
    FechaDosisUno:{
        type:String,
        trim:true
    },
    FabricanteDosisUno:{
        type:String,
        trim:true
    },
    LoteDosisUno:{
        type:String,
        trim:true
    },
    IPSvacunadoraDosis:{
        type:String,
        trim:true
    },
    NombreVacunadorDosisUno:{
        type:String,
        trim:true
    },
    DocumentoVacunadorDosisUno:{
        type:String,
        trim:true
    },
    FechaDosisDos:{
        type:String,
        trim:true
    },
    FabricanteDosisDos:{
        type:String,
        trim:true
    },
    LoteDosisDos:{
        type:String,
        trim:true
    },
    IPSvacunadoraDosisDos:{
        type:String,
        trim:true
    },
    NombreVacunadorDosisDos:{
        type:String,
        trim:true
    },
    DocumentoVacunadorDosisDos:{
        type:String,
        trim:true
    },


})

module.exports = mongoose.model("paciente",PacienteSchema);