console.log("CONDICIONALES - Concesionario");

/*IF simple: temperatura en el taller*/
let temperatura = 45;
if (temperatura > 30) {
    console.log("Hace calor en el taller, revisar ventilación.");
}

/*IF ELSE: validación de acceso al sistema*/
console.log("CONDICIONAL if else");
const password = "concesionario123";
if (password === "concesionario123") {
    console.log("Acceso autorizado al sistema del concesionario.");
} else {
    console.log("Usuario no autorizado.");
}

/*IF anidado: edad y licencia para prueba de manejo*/
console.log("CONDICIONAL Anidados");
const edad = 19;
const tieneLicencia = true;

if (edad >= 18) {
    if (tieneLicencia === true) {
        console.log("Puede realizar prueba de manejo.");
    } else {
        console.log("Necesita licencia para conducir.");
    }
} else {
    console.log("Debe ser mayor de edad para conducir.");
}

/*SWITCH: días de atención del concesionario*/
console.log("Condicional Switch");
const dia = "Lunes";

switch (dia) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        console.log("Día laboral: concesionario abierto.");
        break;
    case "Sabado":
        console.log("Horario especial: abierto hasta las 14h00.");
        break;
    case "Domingo":
        console.log("Concesionario cerrado.");
        break;
    default:
        console.log("Día no válido.");
}
