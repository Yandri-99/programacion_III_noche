console.log("INTERFACES - Concesionario");

/*Definición de interfaz para Usuario*/
interface Usuario {
    id: number;
    nombre: string;
    correo: string;
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Yandri",
    correo: "yandri@quitomotors.com"
};

console.log(usuario1);
console.log("Nombre del usuario:", usuario1.nombre);

/*Definición de interfaz para Vehículo*/
interface Vehiculo {
    id: number;
    nombre: string;
    precio?: number; 
}

const vehiculo1: Vehiculo = {
    id: 1,
    nombre: "Toyota Corolla",
    precio: 18000
};

const vehiculo2: Vehiculo = {
    id: 2,
    nombre: "Yamaha R3"
};

console.log("Vehículo 1:", vehiculo1);
console.log("Vehículo 2:", vehiculo2);
