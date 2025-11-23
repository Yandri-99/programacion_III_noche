console.log("POO - Concesionario (Clases Abstractas)");

abstract class Vehiculo {
    abstract arrancar(): void; 

    detener(): void {
        console.log("El vehículo se ha detenido.");
    }
}

class Auto extends Vehiculo {
    arrancar(): void {
        console.log("El auto está arrancando 🚗...");
    }
}

class Moto extends Vehiculo {
    arrancar(): void {
        console.log("La moto está arrancando 🏍️...");
    }
}

const miAuto = new Auto();
miAuto.arrancar();
miAuto.detener();

const miMoto = new Moto();
miMoto.arrancar();
miMoto.detener();
