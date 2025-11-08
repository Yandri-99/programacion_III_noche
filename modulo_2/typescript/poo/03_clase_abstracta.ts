abstract class Animal{
    abstract emitirSonido(): void;

    dormir(): void{
        console.log('zzzz....');
    }
}
class Perro extends Animal{
    emitirSonido(): void {
        console.log('Guau')
    }
}
const dog = new Perro();
dog.emitirSonido();
dog.dormir();
