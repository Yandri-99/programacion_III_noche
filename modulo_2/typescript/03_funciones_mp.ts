console.log("FUNCIONES - Concesionario");

/*Función simple*/
function saludar(): string {
    return "Bienvenido al Concesionario Quito Motors 🚗🏍️";
}
console.log(saludar());

/*Función sin parámetros*/
function precioBase(): number {
    return 18000; // precio base de un auto
}
console.log("Precio base del auto:", precioBase());

/*Función con parámetros*/
function calcularTotal(precio: number, cantidad: number): number {
    return precio * cantidad;
}
console.log("Total por 2 autos:", calcularTotal(18000, 2));

/*Función con parámetro opcional*/
function aplicarIVA(precio: number, iva: number = 0.15): number {
    return precio + (precio * iva);
}
console.log("Precio con IVA:", aplicarIVA(18000));
console.log("Precio con IVA personalizado:", aplicarIVA(18000, 0.12));

/*Función flecha*/
const calcularStock = (autos: number, motos?: number): number => {
    return autos + (motos || 0);
};
console.log("Stock total:", calcularStock(5, 3));
console.log("Stock solo autos:", calcularStock(5));

/*Función void*/
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
mostrarMensaje("Promoción activa: 10% de descuento en motos Yamaha 🏍️");
