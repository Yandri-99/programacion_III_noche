const titulo = document.getElementById("titulo");
console.log(titulo.textContent);

const notas = document.getElementsByClassName("nota");
Array.from(notas).forEach(nota => console.log(nota.textContent));

const items = document.getElementsByClassName("item");
Array.from(items).forEach(item => console.log(item.textContent));

const vehiculos = document.getElementsByName("vehiculoName");
Array.from(vehiculos).forEach(vehiculo => console.log(vehiculo.textContent));
