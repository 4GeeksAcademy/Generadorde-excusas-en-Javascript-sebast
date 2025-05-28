window.onload = function () {
  let quien = ['El perro', 'Mi abuela', 'El cartero', 'Mi gato'];
  let accion = ['comió', 'orinó sobre', 'aplastó', 'rompió'];
  let que = ['mi tarea', 'mi teléfono', 'el coche'];
  let cuando = [
    'antes de clase',
    'mientras dormía',
    'mientras hacía ejercicio',
    'durante el almuerzo',
    'mientras rezaba'
  ];

  function generarExcusa() {
    let quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
    let accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
    let queAleatorio = que[Math.floor(Math.random() * que.length)];
    let cuandoAleatorio = cuando[Math.floor(Math.random() * cuando.length)];

    return quienAleatorio + " " + accionAleatoria + " " + queAleatorio + " " + cuandoAleatorio + ".";
  }

  function mostrarExcusa() {
    document.getElementById("excuse").innerHTML = generarExcusa();
  }
  
  document.getElementById("botonExcusa").addEventListener("click", mostrarExcusa);
  
};
