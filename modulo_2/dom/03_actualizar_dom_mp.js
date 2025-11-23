const mensaje = document.getElementById("mensaje");
mensaje.textContent = "Bienvenido al Concesionario de Autos y Motos";
mensaje.style.color = "blue";
mensaje.style.fontWeight = "bold";

const link = document.getElementById("link");
link.setAttribute("href", "https://www.concesionarioautosymotos.com");
link.classList.add("boton");
link.textContent = "Visita nuestro catálogo";
