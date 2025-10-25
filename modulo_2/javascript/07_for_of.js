console.log("Ciclos O Bucles");
console.log("For OF");

/*Nombres*/
const nombres =["Jose","Juan","Pedro","Simon"];
for (const nombre of nombres){
    console.log("Hola", nombre);
}

/*Separacion De Letra*/
const nombre ="Yandri";
for (const letra of nombre){
    console.log("Letra", letra);
}

/*Determinar el Nuemro Mayor*/
numeros=[1, 2, 3, 44, 5, 6];
mayor=0; 
for (const numero of numeros) {
    if (numero > mayor) {
        mayor = numero;
    }
}
console.log("El número mayor es:", mayor);

/*Clave*/
const persona = {
    nombre: "Anakin",
    apellido: "Skywalker",
    profesion: "Jedi"
}
for (const clave in persona){
    console.log("clave", clave, ":", persona[clave]);
}

/*Ejercicios - libro*/
const libro = {
    titulo: "Yandri y su ",
    autor: "Yandri",
    año: "2005",
    genero: "Ficción",
    paginas: "15",
    ubicacion: "Quito"
}
suma_claves=0;
for (const clave in libro){
    suma_claves++;
}
console.log(suma_claves);