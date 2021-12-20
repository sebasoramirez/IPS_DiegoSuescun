

function consulta (){
    const url = "http://localhost:3015/pacientes"
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then((pacientes)=>{

        const info = pacientes.foreach((paciente)=>{
            const {
                fechaIngreso, nombre, apellidos, tipoDocumento, documento, fechaNacimiento,
                FechaDosisUno, FabricanteDosisUno, LoteDosisUno, IPSvacunadoraDosis, NombreVacunadorDosisUno,
                DocumentoVacunadorDosisUno, FechaDosisDos, FabricanteDosisDos, LoteDosisDos, IPSvacunadoraDosisDos,
                NombreVacunadorDosisDos, DocumentoVacunadorDosisDos
            } = paciente;
            const divpaciente = document.querySelector("#pacientes");
            const tabla = document.createElement("table");
            const renglonuno = document.createElement("tr");
            const renglondos = document.createElement("tr");
            const renglontres = document.createElement("tr");
            const rengloncuatro = document.createElement("tr");
            const name = document.createElement("th");
            name.innerText = "Nombre";
            const lastname = document.createElement("th");
            lastname.innerText = "Apellido";
            const tipodoc = document.createElement("th");
            tipodoc.innerText = "Tipo de documento";
            const documentid = document.createElement("th");
            documentid.innerText = "Numero de documento"
            const nombre1 = document.createElement ("td");
            nombre1.innerText = `${nombre}`
            const apellido1 = document.createElement ("td");
            apellido1.innerText = `${apellidos}`
            const tipodocu1 = document.createElement ("td");
            tipodocu1.innerText= `${tipoDocumento}`
            const documentonumero1 = document.createElement ("td");
            documentonumero1.innerText= `${documento}`
            const primerad = document.createElement("th");
            primerad.innerText = "Primera Dosis"
            const fabricante1 = document.createElement("th");
            fabricante1.innerText = "Nombre primera dosis"
            const segundad = document.createElement("th");
            segundad.innerText = "Segunda Dosis"
            const fabricante2 = document.createElement("th");
            fabricante2.innerText = "Nombre de la segunda dosis"
            const fecha1 = document.createElement ("td");
            fecha1.innerText = `${FechaDosisUno}`
            const inyeccion = document.createElement ("td");
            inyeccion.innerText=`${FabricanteDosisUno}`
            const fecha2 = document.createElement ("td");
            fecha2.innerText= `${FechaDosisDos}`
            const inyeccion2 = document.createElement ("td");
            inyeccion2.innerText =`${FabricanteDosisDos}`


            renglonuno.appendChild(name);

            renglonuno.appendChild(lastname);
            renglonuno.appendChild(tipodoc);
            renglonuno.appendChild(documentid);

            renglondos.appendChild(nombre1);
            renglondos.appendChild(apellido1);
            renglondos.appendChild(tipodocu1);
            renglondos.appendChild(documentonumero1);

            renglontres.appendChild(primerad)
            renglontres.appendChild(fabricante1)
            renglontres.appendChild(segundad)
            renglontres.appendChild(fabricante2)

            rengloncuatro.appendChild(fecha1)
            rengloncuatro.appendChild(inyeccion)
            rengloncuatro.appendChild(fecha2)
            rengloncuatro.appendChild(inyeccion2)


            tabla.appendChild(renglonuno);
            tabla.appendChild(renglondos);
            tabla.appendChild(renglontres);
            tabla.appendChild(rengloncuatro);


            console.log(tabla);


        });
})};

consulta ()