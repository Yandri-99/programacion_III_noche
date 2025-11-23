const cuadro = document.getElementById("cuadro");

function cambiarColor() {
  cuadro.style.backgroundColor = "brown";
  cuadro.textContent = "Auto - Toyota Corolla";
}

function aumentarTamano() {
  cuadro.style.width = "200px";
  cuadro.style.height = "200px";
  cuadro.textContent = "Moto - Yamaha R3";
}

function reiniciar() {
  cuadro.style.width = "100px";
  cuadro.style.height = "100px";
  cuadro.style.backgroundColor = "#58a6ff";
  cuadro.textContent = "Vehículo";
}
