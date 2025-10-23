console.log("CONDICIONALES");
console.log("CONDICIONAL IF");
let temperatura=45;
if(temperatura>30){
    console.log("Hace Calor");
}
console.log("CONDICIONAL if else");
const password="password123";
if(password==="password12"){
    console.log("Usuario Logueado");
}else{
    console.log("Usuario No Autorizado")
}

console.log("CONDICIONAL Anidados");
const edad=19;
const tieneLicencia=true
if(edad>18)
    if(tieneLicencia==true){
        console.log("Puede Conducir");
    }else{
        console.log("Necesita Licencia")
}else{
    console.log("Necesita Licencia")
}

console.log("Condicional Switch");
const dia ="Lunes";
switch(dia){
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        console.log("Inicio de Laboral");
        break;      
    case "Sabado":
    case "Domingo":
        console.log("Fin De Semana")
        break;
    default:
        console.log("Dia No Valido");
}