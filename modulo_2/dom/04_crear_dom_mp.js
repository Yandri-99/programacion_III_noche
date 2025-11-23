const listaVehiculos = document.getElementById("vehiculos");
const btnCrear = document.getElementById("Crear");
const btnEliminar = document.getElementById("Eliminar");
const btnDobleClick = document.getElementById("btnDobleClick");
const formulario = document.getElementById("formulario");
const contador = document.getElementById("contador");

let totalVehiculos = 0;

btnCrear.addEventListener("click", () => {
    const nuevoVehiculo = document.createElement("li");
    nuevoVehiculo.textContent = "Auto - Toyota Corolla";
    listaVehiculos.appendChild(nuevoVehiculo);
    totalVehiculos++;
    contador.textContent = `Total vehículos: ${totalVehiculos}`;
});

btnEliminar.addEventListener("click", () => {
    if (listaVehiculos.lastChild) {
        listaVehiculos.removeChild(listaVehiculos.lastChild);
        totalVehiculos--;
        contador.textContent = `Total vehículos: ${totalVehiculos}`;
    }
});

btnDobleClick.addEventListener("dblclick", () => {
    const nuevaMoto = document.createElement("li");
    nuevaMoto.textContent = "Moto - Yamaha R3";
    listaVehiculos.appendChild(nuevaMoto);
    totalVehiculos++;
    contador.textContent = `Total vehículos: ${totalVehiculos}`;
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreVehiculo = document.getElementById("nombre").value;
    if (nombreVehiculo.trim() !== "") {
        const nuevoVehiculo = document.createElement("li");
        nuevoVehiculo.textContent = nombreVehiculo;
        listaVehiculos.appendChild(nuevoVehiculo);
        totalVehiculos++;
        contador.textContent = `Total vehículos: ${totalVehiculos}`;
        formulario.reset();
    }
});
