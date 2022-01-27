const express = require("express");
const routes = require("./routers");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 3015;

/* Habilitar body parser que nos ayuda a leer el cuerpo del formulario con el post */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

/* Usamos cors para permitir consulta entre servidores */
app.use(cors());


/* Conexion a base de datos */
const mongoose = require("mongoose");

const uri = "mongodb+srv://sapiencia:fWQ8r8ZB77nimiJ@cluster0.6qzak.mongodb.net/SapienciaProject?retryWrites=true&w=majority";



mongoose
.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("Conectado Mongo")})
.catch((e) => {console.log(e)})

app.use("/",routes());

app.listen(port,() => {
    console.log("Servidor listo en el puerto 3015:",port);
});