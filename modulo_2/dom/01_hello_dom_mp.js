console.log(document.head);
console.log(document.body.children);

document.title = "Concesionario de Autos y Motos";
console.log(document.title);

const encabezado = document.createElement("h1");
encabezado.textContent = "Concesionario";
document.body.appendChild(encabezado);
