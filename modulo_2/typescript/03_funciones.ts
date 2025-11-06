function saludar(): string{
    return 'Hola Desde Una Funcion Typescript'
}
console.log(saludar());

function suma(): number{
    return 3+7;
}
console.log(suma());

function sumar(numero1: number, numero2: number): number{
    return numero1+numero2;
}
console.log(sumar(9,6));

function sumarOpcional(numero1: number, numero2?: number=15): number{
    return numero1+(numero2 ? numero2 : 15);
}
console.log(sumarOpcional(9,6));
console.log(sumarOpcional(10));

const sumarFlecha=(numero1: number, numero2?: number): number=>{
    return numero1+(numero2 || 15);
}
console.log(sumarFlecha(19,6));
console.log(sumarFlecha(10));

function mostrarMensaje(mensaje: string):void {
    console.log(mensaje);
}
mostrarMensaje('Mensaje Desde Un Void');