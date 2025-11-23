console.log("POO - Concesionario (Herencia)");

class Vehiculo {
    public marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    moverse(): void {
        console.log(`${this.marca} se encuentra en movimiento 🚗🏍️`);
    }
}

class Moto extends Vehiculo {
}

class Auto extends Vehiculo {
    abrirPuertas(): void {
        console.log(`${this.marca} ha abierto sus puertas 🚪`);
    }
}

const miMoto = new Moto("Honda");
miMoto.moverse();

const miAuto = new Auto("Toyota");
miAuto.moverse();
miAuto.abrirPuertas();
