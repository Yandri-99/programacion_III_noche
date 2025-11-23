console.log("Operadores en el Concesionario");
console.log("Operadores Aritméticos");

const precioAuto = 18000;
const precioMoto = 6800;

/* suma */
const suma = precioAuto + precioMoto;
console.log(`${precioAuto} + ${precioMoto} = ${suma}`);

/* resta */
const resta = precioAuto - precioMoto;
console.log(`${precioAuto} - ${precioMoto} = ${resta}`);

/* multiplicación */
const multiplicacion = precioAuto * 2; 
console.log(`${precioAuto} * 2 = ${multiplicacion}`);

/* división */
const division = precioAuto / precioMoto; 
console.log(`${precioAuto} / ${precioMoto} = ${division}`);

/* módulo */
const modulo = precioAuto % precioMoto;
console.log(`${precioAuto} % ${precioMoto} = ${modulo}`);

/* potencia */
const resultado = precioMoto ** 2;
console.log(`${precioMoto} ** 2 = ${resultado}`);

/* Operadores de comparación */
console.log("Operadores de Comparación");
const stockAuto = 5;
const stockMoto = "5";

console.log(`Igualdad Débil ${stockAuto} == ${stockMoto} → ${stockAuto == stockMoto}`);
console.log(`Igualdad Estricta ${stockAuto} === ${stockMoto} → ${stockAuto === stockMoto}`);
console.log(`Desigualdad Débil ${stockAuto} != ${stockMoto} → ${stockAuto != stockMoto}`);
console.log(`Desigualdad Estricta ${stockAuto} !== ${stockMoto} → ${stockAuto !== stockMoto}`);
console.log(`Mayor Que ${stockAuto} > ${stockMoto} → ${stockAuto > stockMoto}`);
console.log(`Menor Que ${stockAuto} < ${stockMoto} → ${stockAuto < stockMoto}`);
console.log(`Mayor Igual Que ${stockAuto} >= ${stockMoto} → ${stockAuto >= stockMoto}`);
console.log(`Menor Igual Que ${stockAuto} <= ${stockMoto} → ${stockAuto <= stockMoto}`);

/* Operadores Lógicos */
console.log("Operadores Lógicos");

console.log(`AND (stockAuto >= stockMoto && stockAuto <= stockMoto) → ${stockAuto >= stockMoto && stockAuto <= stockMoto}`);
console.log(`OR (stockAuto == stockMoto || stockAuto != stockMoto) → ${stockAuto == stockMoto || stockAuto != stockMoto}`);
console.log(`NOT !(stockAuto == stockMoto) → ${!(stockAuto == stockMoto)}`);

// Ejemplos adicionales
console.log(stockAuto != stockMoto && stockAuto >= stockMoto);
console.log(stockAuto >= stockMoto && stockAuto === Number(stockMoto));
console.log(stockAuto != stockMoto || stockAuto >= stockMoto);
console.log(stockAuto > stockMoto || stockAuto !== Number(stockMoto));
console.log(!(stockAuto != stockMoto || stockAuto >= stockMoto));
