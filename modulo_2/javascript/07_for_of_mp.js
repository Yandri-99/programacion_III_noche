console.log("Ciclos o Bucles - Concesionario");
console.log("FOR OF");

/*Lista de clientes*/
const clientes = ["José", "Juan", "Pedro", "Simón"];
for (const cliente of clientes) {
    console.log("Bienvenido al concesionario,", cliente);
}

/*Separación de letras en el nombre del concesionario*/
const nombreConcesionario = "QuitoMotors";
for (const letra of nombreConcesionario) {
    console.log("Letra:", letra);
}

/*Determinar el precio mayor en inventario*/
const precios = [12000, 18000, 7500, 6800, 25000];
let precioMayor = 0;
for (const precio of precios) {
    if (precio > precioMayor) {
        precioMayor = precio;
    }
}
console.log("El precio mayor en inventario es: $", precioMayor);

/*Claves de un objeto vehículo*/
const vehiculo = {
    nombre: "Toyota Corolla",
    tipo: "Auto",
    precio: 18000,
    stock: 5
};
for (const clave in vehiculo) {
    console.log("Clave:", clave, "→", vehiculo[clave]);
}

/*Ejercicio - inventario*/
const inventario = {
    auto: "Chevrolet Spark",
    moto: "Yamaha R3",
    año: "2025",
    ubicacion: "Quito",
    stock: 10
};
let totalClaves = 0;
for (const clave in inventario) {
    totalClaves++;
}
console.log("Número de propiedades en inventario:", totalClaves);
