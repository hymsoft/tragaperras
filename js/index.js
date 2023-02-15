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

  let numerosActuales = [];

  let cantidadVentanas = document.querySelectorAll(".ventana").length;
  let tirar_btn = document.getElementById("tirar");

  tirar_btn.addEventListener("click", lanzarInicio);

  function lanzarInicio() {
    numerosActuales = Array.from({ length: cantidadVentanas }, escogerNumero);
    numerosActuales.forEach((numero, index) => mostrarImagen(index, numero));
    console.log(numerosActuales);
  }

  function lanzarUno() {}

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

  function comparar() {}

  function actualizar() {}

  function mostrarMensaje() {}

  function cerrar() {}

  function sonar() {}
};
