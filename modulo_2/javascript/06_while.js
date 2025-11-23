console.log("Ciclos O Bucles");
console.log("WHILE");
let=i=1;
while(i<=3){
    console.log("Contador: ",i)
    i++;
}

/*Valor Valido*/
let valores=[3,4,-2,4,5]
let indice=0;
while (valores[indice]>0){
    console.log("valor valido", valores[indice]);
    indice++;
}

/*Es impar*/
let n=1;
while (n<10){
    if(n%2!==0){
        console.log(n, "Es impar");
    }
    n++
}

/*Innteraccion*/
let x=5;
do{
    console.log("Interaccion", x);
    x++;
} while (x<5);

/*Contador*/
let contador=5;
suma=0;
do{
    suma+=contador;
    contador++;
} while (contador<5);
console.log(" La suma es", suma);

/*Reduccion*/
let reduccion=1;
do{
    console.log("reduccion", reduccion)
    reduccion--;
} while (reduccion<=0);

/*Tabla de Multiplicacion*/
let Numero = 1;
do {
    console.log("6 x", Numero, "=", 6 * Numero);
    Numero++;
} while (i <= 10);
