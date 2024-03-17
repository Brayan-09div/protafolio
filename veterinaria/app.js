let mascotas = {
  perro: "./img/perro1.jpg",
  gato: "./img/gato.jpg",
  pajaro: "./img/pinguino.jpg",
  conejo: "./img/conejo.jpg",
  pez: "./img/pez.jpg",
  cerdo: "./img/cerdo.jpg",
  otro: "./img/otro.jpg",
};

let datosTarjetas = [];
let modoEdicion = false;

function abrirModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";


  if (modoEdicion) {
    const consulta = datosTarjetas.find((consulta) => consulta.id === idEdicion);
    if (consulta) {
      document.getElementById("nombreMascota").value = consulta.nombreMascota;
      document.getElementById("dueño").value = consulta.dueño;
      document.getElementById("telefono").value = consulta.telefono;
      document.getElementById("tipoMascota").value = consulta.tipoMascota;
      document.getElementById("fecha").value = consulta.fecha;
      document.getElementById("hora").value = consulta.hora;
      document.getElementById("descripcion").value = consulta.descripcion;
      document.getElementById("estado").value = consulta.estado;
    }
  } else {
    limpiarFormulario();
  }
}

function cerrarModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function aceptarModal() {
  if (validarCamposYFechaTiempo()) {
    cerrarModal();
    if (modoEdicion) {
      guardarEdicion(idEdicion);
      modoEdicion = false;
    } else {
      crearCard();
    }
  }
}

function limpiarFormulario() {
  document.getElementById("nombreMascota").value = "";
  document.getElementById("dueño").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("tipoMascota").selectedIndex = 0;
  document.getElementById("fecha").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("descripcion").value = "";
}
let contadorCards = 0;
function crearCard() {
  const nombreMascota = document.getElementById("nombreMascota").value;
  const dueño = document.getElementById("dueño").value;
  const telefono = document.getElementById("telefono").value;
  const tipoMascotaSelect = document.getElementById("tipoMascota");
  const tipoMascota =
    tipoMascotaSelect.options[
      tipoMascotaSelect.selectedIndex
    ].value.toLowerCase();
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const descripcion = document.getElementById("descripcion").value;
  const estadoConsultaSelect = document.getElementById("estado");
  const estadoConsulta =
    estadoConsultaSelect.options[estadoConsultaSelect.selectedIndex].value;

  const nuevaConsulta = {
    id: `card_${contadorCards++}`,
    nombreMascota,
    dueño,
    telefono,
    tipoMascota,
    fecha,
    hora,
    descripcion,
    estado: estadoConsulta,
  };
  datosTarjetas.push(nuevaConsulta);
  console.log(datosTarjetas);

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = nuevaConsulta.id;
  card.innerHTML = `
      <img src="${mascotas[tipoMascota]}" alt="${tipoMascota}" style="width: 100%; height: 120px; object-fit: cover;">
      <p><strong>Nombre de Mascota:</strong> ${nombreMascota}</p>
      <p><strong>Dueño:</strong> ${dueño}</p>
      <p><strong>Telefono:</strong> ${telefono}</p>
      <p><strong>Tipo de Mascota:</strong> ${tipoMascota}</p>
      <p><strong>Fecha:</strong> ${fecha}</p>
      <p><strong>Hora:</strong> ${hora}</p>
      <p><strong>Descripción de la Consulta:</strong> ${descripcion}</p>
      <p><strong>Estado de la Consulta:</strong> <span id="estadoConsulta">${estadoConsulta}</span></p>
  `;

  let editar = document.createElement("button");
  editar.textContent = "✏️";
  editar.style.marginRight = "8px";
  editar.addEventListener("click", () => {
    abrirModal();
    editarCard(nuevaConsulta.id);
  });
  card.appendChild(editar);

  let anular = document.createElement("button");
  anular.textContent = "❌";
  anular.style.marginLeft = "8px";
  anular.addEventListener("click", () => {
    cambiarEstadoAnulado(card);
  });
  card.appendChild(anular);

  const cardContainer = document.getElementById("cards");
  cardContainer.appendChild(card);
}


function editarCard(cardId) {
  const consulta = datosTarjetas.find((consulta) => consulta.id === cardId);
  if (consulta) {
    document.getElementById("nombreMascota").value = consulta.nombreMascota;
    document.getElementById("dueño").value = consulta.dueño;
    document.getElementById("telefono").value = consulta.telefono;
    document.getElementById("tipoMascota").value = consulta.tipoMascota;
    document.getElementById("fecha").value = consulta.fecha;
    document.getElementById("hora").value = consulta.hora;
    document.getElementById("descripcion").value = consulta.descripcion;
    document.getElementById("estado").value = consulta.estado;
    modoEdicion = true; // Establecer el modo de edición
    idEdicion = cardId;
    abrirModal();
  }
}

function guardarEdicion(cardId) {
  const consultaIndex = datosTarjetas.findIndex(
    (consulta) => consulta.id === cardId
  );
  if (consultaIndex !== -1) {
    const nombreMascota = document.getElementById("nombreMascota").value;
    const dueño = document.getElementById("dueño").value;
    const telefono = document.getElementById("telefono").value;
    const tipoMascotaSelect = document.getElementById("tipoMascota");
    const tipoMascota =
      tipoMascotaSelect.options[
        tipoMascotaSelect.selectedIndex
      ].value.toLowerCase();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const descripcion = document.getElementById("descripcion").value;
    const estadoConsultaSelect = document.getElementById("estado");
    const estadoConsulta =
      estadoConsultaSelect.options[estadoConsultaSelect.selectedIndex].value;

    datosTarjetas[consultaIndex].nombreMascota = nombreMascota;
    datosTarjetas[consultaIndex].dueño = dueño;
    datosTarjetas[consultaIndex].telefono = telefono;
    datosTarjetas[consultaIndex].tipoMascota = tipoMascota;
    datosTarjetas[consultaIndex].fecha = fecha;
    datosTarjetas[consultaIndex].hora = hora;
    datosTarjetas[consultaIndex].descripcion = descripcion;
    datosTarjetas[consultaIndex].estado = estadoConsulta;

    const card = document.getElementById(cardId);
    card.querySelector("img").src = mascotas[tipoMascota];
    card.querySelector("img").alt = tipoMascota;
    card.querySelector(
      "p:nth-of-type(1)"
    ).textContent = `Nombre de Mascota: ${nombreMascota}`;
    card.querySelector("p:nth-of-type(2)").textContent = `Dueño: ${dueño}`;
    card.querySelector(
      "p:nth-of-type(3)"
    ).textContent = `Telefono: ${telefono}`;
    card.querySelector(
      "p:nth-of-type(4)"
    ).textContent = `Tipo de Mascota: ${tipoMascota}`;
    card.querySelector("p:nth-of-type(5)").textContent = `Fecha: ${fecha}`;
    card.querySelector("p:nth-of-type(6)").textContent = `Hora: ${hora}`;
    card.querySelector(
      "p:nth-of-type(7)"
    ).textContent = `Descripción de la Consulta: ${descripcion}`;
    card.querySelector(
      "p:nth-of-type(8)"
    ).textContent = `Estado de la Consulta: ${estadoConsulta}`;
  }
}

// fuciones para orgenizar
function mostrarTodas() {
  const cardContainer = document.getElementById("cards");
  cardContainer.innerHTML = "";

  datosTarjetas.forEach((consulta) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = consulta.id;
    card.innerHTML = `
        <img src="${mascotas[consulta.tipoMascota]}" alt="${
      consulta.tipoMascota
    }" style="width: 100%; height: 120px; object-fit: cover;">
        <p><strong>Nombre de Mascota:</strong> ${consulta.nombreMascota}</p>
        <p><strong>Dueño:</strong> ${consulta.dueño}</p>
        <p><strong>Telefono:</strong> ${consulta.telefono}</p>
        <p><strong>Tipo de Mascota:</strong> ${consulta.tipoMascota}</p>
        <p><strong>Fecha:</strong> ${consulta.fecha}</p>
        <p><strong>Hora:</strong> ${consulta.hora}</p>
        <p><strong>Descripción de la Consulta:</strong> ${
          consulta.descripcion
        }</p>
        <p><strong>Estado de la Consulta:</strong> <span id="estadoConsulta">${
          consulta.estado
        }</span></p>
    `;

    let editar = document.createElement("button");
    editar.textContent = "✏️";
    editar.style.marginRight = "8px";
    editar.addEventListener("click", () => {
      abrirModal();
      editarCard(consulta.id); // Corregimos aquí
    });
    card.appendChild(editar);

    let anular = document.createElement("button");
    anular.textContent = "❌";
    anular.style.marginLeft = "8px";
    anular.addEventListener("click", () => {
      cambiarEstadoAnulado(card);
    });
    card.appendChild(anular);

    cardContainer.appendChild(card);
  });
}
function filtrarPorAbiertas() {
  const cardContainer = document.getElementById("cards");
  cardContainer.innerHTML = "";
  datosTarjetas.forEach((consulta) => {
    if (consulta.estado === "abierto") {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = consulta.id;
      card.innerHTML = `
          <img src="${mascotas[consulta.tipoMascota]}" alt="${
        consulta.tipoMascota
      }" style="width: 100%; height: 120px; object-fit: cover;">
          <p><strong>Nombre de Mascota:</strong> ${consulta.nombreMascota}</p>
          <p><strong>Dueño:</strong> ${consulta.dueño}</p>
          <p><strong>Telefono:</strong> ${consulta.telefono}</p>
          <p><strong>Tipo de Mascota:</strong> ${consulta.tipoMascota}</p>
          <p><strong>Fecha:</strong> ${consulta.fecha}</p>
          <p><strong>Hora:</strong> ${consulta.hora}</p>
          <p><strong>Descripción de la Consulta:</strong> ${
            consulta.descripcion
          }</p>
          <p><strong>Estado de la Consulta:</strong> <span id="estadoConsulta">${
            consulta.estado
          }</span></p>
      `;
      let editar = document.createElement("button");
      editar.textContent = "✏️";
      editar.style.marginRight = "8px";
      editar.addEventListener("click", () => {
        abrirModal();
        editarCard(consulta.id); // Corregimos aquí
      });
      card.appendChild(editar);

      let anular = document.createElement("button");
      anular.textContent = "❌";
      anular.style.marginLeft = "8px";
      anular.addEventListener("click", () => {
        cambiarEstadoAnulado(card);
      });
      card.appendChild(anular);
      cardContainer.appendChild(card);
    }
  });
}

// 2
function filtrarPorFinalizadas() {
  const cardContainer = document.getElementById("cards");
  cardContainer.innerHTML = "";
  datosTarjetas.forEach((consulta) => {
    if (consulta.estado === "finalizadas") {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = consulta.id;
      card.innerHTML = `
          <img src="${mascotas[consulta.tipoMascota]}" alt="${
        consulta.tipoMascota
      }" style="width: 100%; height: 120px; object-fit: cover;">
          <p><strong>Nombre de Mascota:</strong> ${consulta.nombreMascota}</p>
          <p><strong>Dueño:</strong> ${consulta.dueño}</p>
          <p><strong>Telefono:</strong> ${consulta.telefono}</p>
          <p><strong>Tipo de Mascota:</strong> ${consulta.tipoMascota}</p>
          <p><strong>Fecha:</strong> ${consulta.fecha}</p>
          <p><strong>Hora:</strong> ${consulta.hora}</p>
          <p><strong>Descripción de la Consulta:</strong> ${
            consulta.descripcion
          }</p>
          <p><strong>Estado de la Consulta:</strong> <span id="estadoConsulta">${
            consulta.estado
          }</span></p>
      `;
      let editar = document.createElement("button");
      editar.textContent = "✏️";
      editar.style.marginRight = "8px";
      editar.addEventListener("click", () => {
        abrirModal();
        editarCard(consulta.id); // Corregimos aquí
      });
      card.appendChild(editar);

      let anular = document.createElement("button");
      anular.textContent = "❌";
      anular.addEventListener("click", () => {
        cambiarEstadoAnulado(card);
      });
      card.appendChild(anular);
      cardContainer.appendChild(card);
    }
  });
}
// 3
function filtrarPorAnuladas() {
  const cardContainer = document.getElementById("cards");
  cardContainer.innerHTML = "";
  datosTarjetas.forEach((consulta) => {
    if (consulta.estado === "anulada") {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = consulta.id;
      card.innerHTML = `
          <img src="${mascotas[consulta.tipoMascota]}" alt="${
        consulta.tipoMascota
      }" style="width: 100%; height: 120px; object-fit: cover;">
          <p><strong>Nombre de Mascota:</strong> ${consulta.nombreMascota}</p>
          <p><strong>Dueño:</strong> ${consulta.dueño}</p>
          <p><strong>Telefono:</strong> ${consulta.telefono}</p>
          <p><strong>Tipo de Mascota:</strong> ${consulta.tipoMascota}</p>
          <p><strong>Fecha:</strong> ${consulta.fecha}</p>
          <p><strong>Hora:</strong> ${consulta.hora}</p>
          <p><strong>Descripción de la Consulta:</strong> ${
            consulta.descripcion
          }</p>
          <p><strong>Estado de la Consulta:</strong> <span id="estadoConsulta">${
            consulta.estado
          }</span></p>
      `;
      let editar = document.createElement("button");
      editar.textContent = "✏️";
      editar.style.marginRight = "8px";
      editar.addEventListener("click", () => {
        abrirModal();
        editarCard(consulta.id); // Corregimos aquí
      });
      card.appendChild(editar);
      let anular = document.createElement("button");
      anular.textContent = "❌";
      anular.style.marginLeft = "8px";
      anular.addEventListener("click", () => {
        cambiarEstadoAnulado(card);
      });
      card.appendChild(anular);
      cardContainer.appendChild(card);
    }
  });
}
// fin
function cambiarEstadoAnulado(card) {
  const idCard = card.id;
  const consultaIndex = datosTarjetas.findIndex(
    (consulta) => consulta.id === idCard
  );
  if (consultaIndex !== -1) {
    datosTarjetas[consultaIndex].estado = "anulada";
  }
  const estadoConsultaElement = card.querySelector("#estadoConsulta");
  estadoConsultaElement.textContent = "anulada";
}
function actualizarEstadoPorFecha(card, estadoInicial, fechaConsulta) {
  const fechaActual = new Date();
  const fechaConsultaDate = new Date(fechaConsulta);
  if (fechaActual > fechaConsultaDate) {
    card.setAttribute("data-estado", "finalizadas");
  } else {
    card.setAttribute("data-estado", estadoInicial);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dd = String(tomorrow.getDate()).padStart(2, "0");
  const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const yyyy = tomorrow.getFullYear();
  const minDate = yyyy + "-" + mm + "-" + dd;
  const fechaInput = document.getElementById("fecha");
  if (fechaInput) {
    fechaInput.setAttribute("min", minDate);
  }
});

function validarCamposYFechaTiempo() {
  const nombreMascota = document.getElementById("nombreMascota").value;
  const dueño = document.getElementById("dueño").value;
  const telefono = document.getElementById("telefono").value;
  const tipoMascotaSelect = document.getElementById("tipoMascota");
  const descripcion = document.getElementById("descripcion");
  const tipoMascota =
    tipoMascotaSelect.options[
      tipoMascotaSelect.selectedIndex
    ].value.toLowerCase();

  if (nombreMascota.trim() === "") {
    alert("Ingresa el nombre de la mascota.");
    return false;
  }
  if (dueño.trim() === "") {
    alert("Ingresa el nombre del dueño.");
    return false;
  }
  if (!/^\d{10}$/.test(telefono)) {
    alert("Error: Ingresa un número de teléfono válido (10 dígitos).");
    return false;
  }
  if (tipoMascota === "") {
    alert("Selecciona el tipo de mascota.");
    return false;
  }
  if (descripcion.value.trim() === "") {
    alert("Ingresa una descripción de la consulta.");
    return false;
  }
  const fecha = document.getElementById("fecha").value;
  const tiempo = document.getElementById("hora").value;
  if (fecha.trim() === "") {
    alert("Ingresa la fecha.");
    return false;
  }
  if (tiempo.trim() === "") {
    alert("Ingresa la hora.");
    return false;
  }
  const horaLimiteInicio = new Date();
  horaLimiteInicio.setHours(7, 0, 0);
  const horaLimiteFin = new Date();
  horaLimiteFin.setHours(23, 0, 0);
  const fechaSeleccionada = new Date(fecha);
  const horaSeleccionada = new Date(
    fechaSeleccionada.getFullYear(),
    fechaSeleccionada.getMonth(),
    fechaSeleccionada.getDate(),
    parseInt(tiempo.split(":")[0]),
    parseInt(tiempo.split(":")[1])
  );
  if (
    fechaSeleccionada <= new Date() ||
    (fechaSeleccionada.getTime() === new Date().getTime() &&
      horaSeleccionada < horaLimiteInicio) ||
    horaSeleccionada > horaLimiteFin
  ) {
    alert(
      "La fecha y el tiempo deben ser mayores a la fecha y hora actuales, y el tiempo debe estar en el rango de 07:00 a 23:00."
    );
    return false;
  }
  return true;
}
