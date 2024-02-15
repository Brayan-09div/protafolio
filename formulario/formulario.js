
let data = [];
let active = true;
let indice = null;

function enviar() {
    if(active == true) {
    let nombre = document.getElementById('nombre').value
    console.log(nombre)
    let apellido = document.getElementById('apellidos').value
    console.log(apellido)
    let correo = document.getElementById('correo').value
    console.log(correo)
    let telefono = document.getElementById('telefono').value
    console.log(telefono)
    let nacimiento = document.getElementById('fechaNacimiento').value
    console.log(nacimiento)

    let g = ""
    if (document.getElementById("masculino").checked) {
        console.log("Masculino");
        g = "Masculino"
    } if (document.getElementById("femenino").checked) {
        console.log("Femenino");
        g = "Femenino"
    } if (document.getElementById("otro").checked) {
        console.log("otro");
        g = "otro"
    }

    console.log(document.getElementById("documento").value);

    let documento = document.getElementById('numerodocumento').value
    console.log(documento)


    let datos = {}
    datos = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        nacimiento: nacimiento,
        genero: g,
        tipodoc: document.getElementById("documento").value,
        documento: documento
    }

    console.log(datos);
    data.push(datos)
    console.log(data);

    pintar();
    limpiar();

    }else{
     
        data[indice].nombre = document.getElementById("nombre").value;
        data[indice].apellido = document.getElementById("apellidos").value;
        pintar();
        limpiar();
        active = true;
    }

}


function limpiar(){
    document.getElementById('nombre').value = "";
    document.getElementById('apellidos').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('fechaNacimiento').value = "";
    document.getElementById('masculino').checked = false;
    document.getElementById('femenino').checked = false;
    document.getElementById('otro').checked = false;
    document.getElementById('documento').value = "cedula de ciudadania";
    document.getElementById('numerodocumento').value = "";

}



function pintar() {
    let tabla = document.getElementById('miTabla').getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";

    data.forEach((item, index) => {
        let fila = tabla.insertRow();

        fila.insertCell(0).textContent = item.nombre;
        fila.insertCell(1).textContent = item.apellido;
        fila.insertCell(2).textContent = item.correo;
        fila.insertCell(3).textContent = item.telefono;
        fila.insertCell(4).textContent = item.nacimiento;
        fila.insertCell(5).textContent = item.genero;
        fila.insertCell(6).textContent = item.tipodoc
        fila.insertCell(7).textContent = item.documento



        let eliminar = document.createElement("button");
        eliminar.textContent = "✖️";
        eliminar.addEventListener("click", () => {
            eliminarFila(index);
        });

        let editar = document.createElement("button");
        editar.textContent = "✏️";
        editar.addEventListener("click", () => {
            editarFila(index);
        });
        
        let celda = fila.insertCell(8);
        celda.appendChild(eliminar);
        celda.appendChild(editar); celda.appendChild(editar);
    });
}

function eliminarFila(index) {
    data.splice(index, 1);
    pintar();
}


function editarFila(index) {
    console.log(data);
    active = false;
    let elemento = data[index];
    document.getElementById("nombre").value = elemento.nombre;
    document.getElementById("apellidos").value = elemento.apellido;

    indice = index;
}