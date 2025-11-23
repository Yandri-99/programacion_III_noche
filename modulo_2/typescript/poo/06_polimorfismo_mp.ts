console.log("POO - Concesionario (Herencia con Camión)");

import { Vehiculo } from "./05_herencia_mp";

class Camion extends Vehiculo {
    private capacidadCarga: number = 0;

    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    }

    getCapacidad(): number {
        return this.capacidadCarga;
    }
}

const miCamion = new Camion("Ford");
miCamion.moverse();
miCamion.setCapacidad(500);
console.log("Capacidad de carga:", miCamion.getCapacidad(), "kg.");
