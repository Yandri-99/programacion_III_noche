const inventario = [
  {
    nombre: "Toyota Corolla",
    descripcion: "Auto compacto, eficiente en consumo",
    precio: 18000,
    existencia: 5,
    ubicacion: "Quito - Sucursal Norte"
  },
  {
    nombre: "Honda CB500",
    descripcion: "Moto deportiva de media cilindrada",
    precio: 7500,
    existencia: 3,
    ubicacion: "Quito - Sucursal Sur"
  },
  {
    nombre: "Chevrolet Spark",
    descripcion: "Auto económico y urbano",
    precio: 12000,
    existencia: 4,
    ubicacion: "Quito - Sucursal Centro"
  },
  {
    nombre: "Yamaha R3",
    descripcion: "Moto ligera ideal para ciudad",
    precio: 6800,
    existencia: 6,
    ubicacion: "Quito - Sucursal Norte"
  }
];

const cuerpoTabla = document.getElementById("cuerpoTabla");

inventario.forEach(vehiculo => {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${vehiculo.nombre}</td>
    <td>${vehiculo.descripcion}</td>
    <td>$${vehiculo.precio}</td>
    <td>${vehiculo.existencia}</td>
    <td>${vehiculo.ubicacion}</td>
  `;

  cuerpoTabla.appendChild(fila);
});
