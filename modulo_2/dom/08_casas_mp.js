const formulario = document.getElementById("formulario");
const contenedorVehiculos = document.getElementById("contenedorVehiculos");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;
  const ubicacion = document.getElementById("ubicacion").value;

  // Crear tarjeta de vehículo
  const tarjeta = document.createElement("div");
  tarjeta.style.border = "1px solid black";
  tarjeta.style.padding = "10px";
  tarjeta.style.margin = "10px 0";

  tarjeta.innerHTML = `
    <h3>${nombre}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio:</strong> $${precio}</p>
    <p><strong>Ubicación:</strong> ${ubicacion}</p>
  `;

  contenedorVehiculos.appendChild(tarjeta);

  formulario.reset();
});
