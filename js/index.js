window.onload = function () {
  // Declaro el crédito inicial del jugador
  let credito = Math.floor(Math.random() * 4) + 9;

  // Las imágenes y los premios del juego son almacenados como elementos en un array de objetos
  let imagenes = [
    "rey_atanagildo.png",
    "rey_ataulfo.png",
    "rey_ervigio.png",
    "rey_leogivildo.png",
    "rey_leogivildo.png",
    "rey_sisebuto.png",
    "rey_incognito.png",
  ];
  let premios = [3, 2, 3, 2, 2, 3, 6];

  // Para cada imagen, creamos un objeto con su nombre, imagen y premio, y lo agregamos al array de elemento
  let elementos = imagenes.map((imagen, index) => ({
    nombre: imagen,
    ruta: "/img/" + imagen,
    premio: premios[index],
  }));

  //Precargo las imagenes
  let imagenesPrecargadas = [];
  // Cargamos todas las imágenes en el objeto Image
  for (let i = 0; i < imagenes.length; i++) {
    let img = new Image();
    img.src = "/img/" + imagenes[i];
    img.addEventListener("load", () => {
      // Agregamos la imagen precargada al array de imágenes precargadas
      imagenesPrecargadas.push(img);
    });
  }
  let imgMonedas = new Image();
  imgMonedas.src = "/img/moneda.png";

  let numerosActuales = [];

  let cantidadVentanas = document.querySelectorAll(".ventana").length;
  document.querySelectorAll(".boton").forEach((boton) => {
    boton.addEventListener("click", lanzarUno);
  });
  let modal = document.getElementById("velo");
  let modalMensaje = document.getElementById("mensaje");
  let modalCerrar = document.getElementById("cruz");
  cruz.addEventListener("click", cerrar);
  let modalCerrarSong = document.getElementById("sonido");
  modalCerrarSong.src = "sound/youwin.mp3";
  let tirar_btn = document.getElementById("tirar");
  tirar_btn.addEventListener("click", lanzarInicio);

  function lanzarInicio() {
    numerosActuales = Array.from({ length: cantidadVentanas }, escogerNumero);
    numerosActuales.forEach((numero, index) => mostrarImagen(index, numero));
    comparar();
  }

  function lanzarUno() {
    this.style.opacity = 0.2;
  }

  function escogerNumero() {
    // Escogemos un número aleatorio entre 0 y la cantidad de imágenes disponibles
    return Math.floor(Math.random() * imagenes.length);
  }

  function mostrarImagen(numeroVentana, numeroImagen) {
    document
      .querySelector(`.ventana:nth-child(${numeroVentana + 1}) .imagen img`)
      .setAttribute("src", elementos[numeroImagen].ruta);
  }

  //   function mostrarImagen(numeroVentana, numeroImagen) {
  //     document
  //       .querySelector(`.ventana:nth-child(${numeroVentana + 1}) .imagen img`)
  //       .setAttribute("src", elementos[numeroImagen].imagen);
  //   }

  function comparar() {
    if (todosIguales) {
      let premio = elementos[numerosActuales[0]].premio;
      let mensaje = `Has ganado ${premio} monedas<br>`;
      for (let j = 0; j < premio; j++) {
        mensaje += `<img class="premio" src="/img/moneda.png">`;
      }
      mostrarMensaje(mensaje);
    } else {
      console.log("No todos los elementos del array son iguales");
    }
  }

  function actualizar() {}

  function mostrarMensaje(mensaje) {
    modal.style.display = "flex";
    modalMensaje.innerHTML = mensaje;
    sonar();
  }

  function cerrar() {
    modal.style.display = "none";
  }

  function sonar() {
    modalCerrarSong.play();
  }
};
