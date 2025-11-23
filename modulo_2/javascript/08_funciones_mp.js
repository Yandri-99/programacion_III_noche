console.log("FUNCIONES - Concesionario");
console.log("Funciones Simples");

/*Función simple*/
function saludar() {
    console.log("Bienvenido al Concesionario Quito Motors 🚗🏍️");
}
saludar();

/*Función con parámetros*/
console.log("Función con Parámetros");
function calcularPrecioFinal(precio, iva) {
    return precio + (precio * iva);
}
console.log("Precio final del Auto:", calcularPrecioFinal(18000, 0.15));
console.log("Precio final de la Moto:", calcularPrecioFinal(6800, 0.15));

/*Función Flecha*/
console.log("Función con Flecha");
const mostrarVehiculo = () => {
    console.log("Mostrando vehículo: Toyota Corolla");
};
mostrarVehiculo();

const calcularStockTotal = (autos, motos) => autos + motos;
console.log("Stock total de vehículos:", calcularStockTotal(5, 3));

/*Función Retorno Directo*/
console.log("Función Retorno Directo");
const cuadrado = x => x * x;
console.log("Simulación de cálculo cuadrado de stock:", cuadrado(4));

/*Función con parámetro por defecto*/
console.log("Función con Parámetros por Defecto");
function aplicarDescuento(precio, descuento = 0.10) {
    return precio - (precio * descuento);
}
console.log("Precio con descuento aplicado:", aplicarDescuento(12000, 0.20));
console.log("Precio con descuento por defecto:", aplicarDescuento(12000));
