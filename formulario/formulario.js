
let data = [];

function enviar() {
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


pintar();
    

}

function pintar() {
    let tabla = document.getElementById('tablita');
    tabla.innerHTML = "";-

    data.forEach((item, i) => {
        tabla.innerHTML += `
            <ul>
                <li>  ${item.nombre} -- ${item.apellido} -- ${item.correo} -- ${item.telefono} -- ${item.nacimiento} -- ${item.tipodoc} -- ${item.documento}</li>
            </ul>
        `;
    });
}

