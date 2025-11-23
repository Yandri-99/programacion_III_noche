console.log("Ciclos o Bucles - Concesionario");
console.log("WHILE");

/*Contador simple*/
let i = 1;
while (i <= 3) {
    console.log("Vehículo número:", i);
    i++;
}

/*Valor válido en inventario*/
let valores = [3, 4, -2, 4, 5]; 
let indice = 0;
while (valores[indice] > 0) {
    console.log("Stock válido:", valores[indice]);
    indice++;
}

/*Es impar*/
let n = 1;
while (n < 10) {
    if (n % 2 !== 0) {
        console.log("ID de vehículo", n, "es impar");
    }
    n++;
}

/* Interacción con do...while */
let x = 5;
do {
    console.log("Interacción con cliente número:", x);
    x++;
} while (x < 5);

/*Contador con suma*/
let contador = 5;
let suma = 0;
do {
    suma += contador;
    contador++;
} while (contador < 5);
console.log("La suma de vehículos es:", suma);

/*Reducción de stock*/
let reduccion = 1;
do {
    console.log("Reducción de stock:", reduccion);
    reduccion--;
} while (reduccion >= 0);

/*Tabla de multiplicación*/
let Numero = 1;
do {
    console.log("Precio Auto $6000 x", Numero, "=", 6000 * Numero);
    Numero++;
} while (Numero <= 10);
