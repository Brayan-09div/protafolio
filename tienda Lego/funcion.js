const productos = [
  {
    nombre: "Halcón Milenario",
    imagen: "./img/img-star.jpg",
    precio: 100.0,
    descri: "Incluye 7 personajes LEGO® Star Wars™: minifiguras de Finn, Chewbacca, C-3PO, Lando Calrissian y Boolio; incluye también figuras LEGO de los droides R2-D2 y D-O.",
  },
  {
    nombre: " Cazareconpemsas",
    imagen: "./img/img-star2.jpg",
    precio: 200.0,
    descri: " cuenta con una bodega de carga con elementos que representan botines de carbonita en su interior y con laterales que se abren que sirven también como rampas de acceso",
  },
  {
    nombre: "AT-ST",
    imagen: "./img/img-star3.jpg",
    precio: 300.0,
    descri: "El caminante AT-ST mide aproximadamente 26 cm de altura, 16 cm de longitud y 13 cm de anchura",
  },
  {
    nombre: "CAZA ESTELAR ",
    imagen: "./img/img-star4.jpg",
    precio: 400.0,
    descri: "Idea de regalo para fans a partir de 7 años: regala este juguete de construcción de 282 piezas como regalo de cumpleaños o de Navidad a fans de Star Wars",
  },
  {
    nombre: "Jet Arácnido",
    imagen: "./img/img-mar1.jpg",
    precio: 100.0,
    descri: "Con esta enorme armadura robótica de Venom, los peques ya tienen a un tipo malo de tamaño gigante al que derrotar. ",
  },
  {
    nombre: "Guardianes",
    imagen: "./img/img-mar2.jpg",
    precio: 200.0,
    descri: "Este set de juego y exposición satisfará la pasión de tu cinéfilo por la película Guardianes de la Galaxia",
  },
  {
    nombre: "Avengers",
    imagen: "./img/img-mar3.jpg",
    precio: 300.0,
    descri: "Este juego de superhéroes para construir incluye 4 minifiguras del Universo Marvel: Iron Man, Captain Marvel, Nebula y un Outrider de 4 brazos",
  },
  {
    nombre: "NUEVO ASGARD",
    imagen: "./img/img-mar4.jpg",
    precio: 400.0,
    descri: "con una altura de más de 11 cm , el Monstruo de las Sombras articulado inspira un sinfín de juegos de rol imaginativos y se puede exhibir cuando terminan las batallas del día.",
  },
  {
    nombre: "FERRARI 812",
    imagen: "./img/img-car1.jpg",
    precio: 400.0,
    descri: "La maqueta Ferrari 812 Competizione mide aproximadamente 4 cm de altura, 16 cm de longitud y 7 cm de anchura",
  },
  {
    nombre: "BUGATTI BOLIDE",
    imagen: "./img/img-car2.jpg",
    precio: 400.0,
    descri: "Los juegos de modelos construibles LEGO Technic cuentan con movimientos y mecanismos realistas que introducen a los jóvenes constructores LEGO",
  },
  {
    nombre: "LAMBORGHINI",
    imagen: "./img/img-car3.jpg",
    precio: 400.0,
    descri: "Los niños a partir de 9 años podrán disfrutar de una gratificante experiencia construyendo cada detalle del fiel modelo Lamborghini Huracán",
  },
  {
    nombre: "Bugatti Chiron",
    imagen: "./img/img-car4.jpg",
    precio: 400.0,
    descri: "Se entrega en una caja de lujo y el set incluye 3.599 ladrillos, El Bugatti Chiron mide más de 14 cm de altura, 56 cm de longitud y 32 cm de ancho.",
  },
  {
    nombre: "Casa de “Up”",
    imagen: "./img/img-dis1.jpg",
    precio: 400.0,
    descri: "Tu peque podrá construir la casa que aparece en “Up”, de Disney y Pixar, y reproducir sus momentos favoritos o crear sus propias aventuras.",
  },
  {
    nombre: "Stitch",
    imagen: "./img/img-dis2.jpg",
    precio: 400.0,
    descri: "Los peques pueden crear a su propio Stitch, que lleva una camisa hawaiana, una flor y un cucurucho de helado, para jugar con él o exponerlo.",
  },
  {
    nombre: "Mini Palacio",
    imagen: "./img/img-dis3.jpg",
    precio: 400.0,
    descri: "Dimensiones: Mide aproximadamente 15 cm de altura, 14 cm de anchura y 16 cm de profundidad",
  },
  {
    nombre: "El Botero Willie",
    imagen: "./img/img-dis4.jpg",
    precio: 400.0,
    descri: "A los fans de Mickey Mouse de Disney les va a encantar esta sensacional versión LEGO del barco S.S. Willie para construir, exponer y jugar con él",
  },
];

function mostrarTarjetas() {
  const container = document.getElementById("product-container");

  productos.forEach((producto) => {

    const card = document.createElement("div");
    card.className = "product-card";

 
    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    card.appendChild(imagen);

 
    const nombreProducto = document.createElement("h3");
    nombreProducto.textContent = producto.nombre;
    card.appendChild(nombreProducto);

   
    const precioProducto = document.createElement("p");
    precioProducto.textContent = `$${producto.precio.toFixed(2)}`;
    card.appendChild(precioProducto);

 
    const Descri = document.createElement("p");
    Descri.textContent = `${producto.descri}`;
    card.appendChild(Descri);

    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.className = "btn btn-warning";

    botonAgregar.addEventListener("click", function () {
      
      console.log(
        "Botón 'Agregar al carrito' clickeado para el producto:",
        producto.nombre
      );

     
      agregarProductoATabla(producto);
    });

    card.appendChild(botonAgregar);
    container.appendChild(card);
  });
}
window.onload = mostrarTarjetas;

let mos = false;

function visi() {
  let con = document.querySelector(".cont1");

  if (mos) {
    con.style.display = "block";
  } else {
    con.style.display = "none";
  }

  mos = !mos;
}

const carrito = new Map(); 

function agregarProductoATabla(producto) {
    const key = JSON.stringify(producto);

    if (carrito.has(key)) {
        carrito.set(key, carrito.get(key) + 1);
    } else {
        carrito.set(key, 1);
    }

    actualizarTablaCarrito();
}

function actualizarTablaCarrito() {
    const tabla = document.getElementById("miTabla");
    const tbody = tabla.getElementsByTagName("tbody")[0];
    tbody.innerHTML = '';

    totalCompra = 0;  

    carrito.forEach((cantidad, key) => {
        const producto = JSON.parse(key);
        const fila = tbody.insertRow();
        const celdaProducto = fila.insertCell(0);
        const celdaNombre = fila.insertCell(1);
        const celdaCantidad = fila.insertCell(2);
        const celdaValor = fila.insertCell(3);
        const celdaEliminar = fila.insertCell(4);

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.style.width = "50px";
        imagen.style.height = "50px";

        celdaProducto.appendChild(imagen);
        celdaProducto.classList.add("imagen-celda");

        celdaNombre.textContent = producto.nombre;
        celdaNombre.classList.add("nombre-celda");

        celdaCantidad.textContent = cantidad;
        celdaCantidad.classList.add("cantidad-celda");

        const valorProducto = cantidad * producto.precio;
        celdaValor.textContent = `$${valorProducto.toFixed(3)}`;
        
        celdaValor.classList.add("valor-celda");


        totalCompra += valorProducto; 

        celdaEliminar.classList.add("Eliminar-celda")
        let eliminar = document.createElement("button");
        eliminar.textContent = "❌";
        eliminar.addEventListener("click", () => {
          eliminarFila(key);
      });
        celdaEliminar.appendChild(eliminar);
    });


    function eliminarFila(key) {
      if (carrito.has(key)) {
          carrito.delete(key);
          actualizarTablaCarrito();
      }
  }


    const totalElement = document.getElementById("total");
    totalElement.textContent = `$${totalCompra.toFixed(3)}`;

    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById("contadorCarrito");
    if (contadorCarrito) {
        const cantidadTotal = Array.from(carrito.values()).reduce((total, cantidad) => total + cantidad, 0);
        contadorCarrito.textContent = cantidadTotal.toString();
    }
}




let isBurgerMenuOpen = false;

function ajustarPosicionCont1() {
    const cont1 = document.querySelector(".cont1");
    const burgerButton = document.getElementById("burgerButton");

    console.log("Click en burger button");
    console.log("Clases del botón:", burgerButton.classList);

    if (burgerButton.classList.contains("collapsed")) {
        console.log("Abrir menú");
        cont1.style.top = "7%";
        cont1.style.left = "0";
        cont1.style.width = "70%";
    } else {
        console.log("Cerrar menú");
        cont1.style.top = "30%";
        cont1.style.left = "0";
        cont1.style.width = "70%";
    }
}



window.addEventListener('resize', ajustarPosicionCont1);

function ajustarPosicionCont1() {
    const cont1 = document.querySelector(".cont1");
    const burgerButton = document.getElementById("burgerButton");

    if (window.innerWidth <= 768) {
        // Pantalla pequeña

        if (burgerButton.classList.contains("collapsed")) {
            cont1.style.top = "10%";
            cont1.style.left = "0";
            cont1.style.right = ""; 
            cont1.style.width = "70%";
        } else {
            cont1.style.top = "30%";
            cont1.style.left = "0";
            cont1.style.right = ""; 
            cont1.style.width = "70%";
        }
    } else {
        cont1.style.top = "10%";
        cont1.style.right = "0";
        cont1.style.left = ""; 
        cont1.style.width = ""; 
    }
}


