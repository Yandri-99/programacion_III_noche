import class vehiculo{
    public marca: string;
    constructor(marca: string){
        this.marca=marca
    }
    moverse(): void{
        console.log(this.marca, 'Se encuentra en movimiento');
    }
}
class Moto extends vehiculo {};
const miMoto = new Moto('Honda');
miMoto.moverse();