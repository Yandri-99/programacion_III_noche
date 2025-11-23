console.log("POO - Concesionario");

/*Tipos de  Vehiculo*/
class Vehiculo {
    marca: string;
    modelo: string;
    precio: number;

    constructor(marca: string, modelo: string, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    mostrarInfo(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo} - Precio: $${this.precio}`);
    }
}

const autoToyota = new Vehiculo("Toyota", "Corolla", 18000);

console.log("Marca:");
console.log(autoToyota.marca);

console.log("Modelo:");
console.log(autoToyota.modelo);

console.log("Precio:");
console.log(autoToyota.precio);

autoToyota.mostrarInfo();
