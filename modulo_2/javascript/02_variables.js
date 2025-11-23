console.log("Variables");
var saludo1="Hola";
var saludo2="Hola Desde Una Variable";
console.log(saludo);

console.log(saludo1+""+saludo2);
console.log('$(saludo1) $(Saludo2)');
console.log('$(saludo1) $(Saludo2) $(4+5)');
let numero = 24;
const angulo = 45;
console.log(numero, angulo);

console.log("Tipos De Datos");
var nombre="Darth Vader"
console.log("String");
var tipoNumero=4444;
console.log("Tipo Numerico", typeof(tipoNumero));
var tipoBooleano=true;
console.log("Tipo Booleano", typeof(tipoBooleano));
var tipoIndefinido=undefined
console.log("Tipo Indefinido", typeof(tipoIndefinido));
var tipoNula=null
console.log("Tipo Nula", typeof(tipoNula));
var tipoSimbolo=Symbol("Clave");
console.log("Tipos Simbolo", typeof(tipoSimbolo));
var tipoBigEntero=432424n;
console.log("Tipos Big Entero", typeof(tipoBigEntero));

const persona = {
    nombre: "Carlos",
    edad: 30
}

console.log("Tipo Objetivo", typeof(persona));
console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);