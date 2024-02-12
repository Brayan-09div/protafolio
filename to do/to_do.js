let tablaExistente = false;

function crearTabla() {
    let tabla = document.createElement('table');
    tabla.setAttribute('id', 'tablaDatos');

    let cabecera = tabla.createTHead();
    let filaCabecera = cabecera.insertRow();
    let encabezados = ['Tareas', 'Fecha', 'Prioridad'];

    encabezados.forEach(function (encabezado) {
        let th = document.createElement('th');
        th.textContent = encabezado;
        filaCabecera.appendChild(th);
    });

    let cuerpo = tabla.createTBody();
    tabla.appendChild(cuerpo);

    tablaExistente = true;

    return tabla;
}

function agregar() {
    let texto = document.getElementById('tareas').value;
    let fecha = document.getElementById('fecha').value;
    let checkbox = document.getElementById('importancia').checked;

    let tabla = document.getElementById('tablaDatos');

    if (!tablaExistente) {
        tabla = crearTabla();
        document.getElementById('tablaContainer').appendChild(tabla);
    }

    let fila = tabla.insertRow();

    let celdaTexto = fila.insertCell(0);
    celdaTexto.textContent = texto;

    let celdaFecha = fila.insertCell(1);
    celdaFecha.textContent = fecha;

    let celdaCheckbox = fila.insertCell(2);
    let prioridadSpan = document.createElement('span');
    prioridadSpan.textContent = checkbox ? 'Alta' : 'Baja';
    prioridadSpan.setAttribute('data-prioridad', checkbox ? 'Alta' : 'Baja');
    celdaCheckbox.appendChild(prioridadSpan);

    document.getElementById('tareas').value = "";
    document.getElementById('fecha').value = "";
    document.getElementById('importancia').checked = false;
}

function ordenarPorPrioridad() {
    let tabla = document.getElementById('tablaDatos');

    if (!tabla) {
        console.error('La tabla no existe');
        return;
    }

    let filas = Array.from(tabla.rows);
    filas.shift(); 

    filas.sort(function(a, b) {
        let prioridadA = a.cells[2].getElementsByTagName('span')[0].getAttribute('data-prioridad');
        let prioridadB = b.cells[2].getElementsByTagName('span')[0].getAttribute('data-prioridad');

        return prioridadA.localeCompare(prioridadB);
    });

    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }

    filas.forEach(function(fila) {
        tabla.appendChild(fila);
    });
}