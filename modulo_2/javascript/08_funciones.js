console.log("FUNCIONES");
console.log("Funciones Simples");

/*Funciones Simples*/
function saludar(){
    console.log("Hola De Parte Del Poderoso Tercer Semestre");
}
saludar();

/*Funcion Paraetros*/
console.log("Funcion Con Parametros");
function suma(a,b){
    return a+b;
}
console.log("Resultado De La Suma Es:", suma(5,8));

/*Funcion Flecha*/
console.log("Funcion Con Flecha");
const funcionFlecha=()=>{
    console.log("Saludando Desde Una Funcion Flecha")
}
funcionFlecha();
const Multiplicacion=(n,m)=>{
    return n*m;
}
console.log(Multiplicacion(7,7));

/*Funcion Retorno Directo*/
console.log("Funcion Retorno Directo");
const cuadrado = x=>x*x;
console.log(cuadrado(5));

/*Funcion Parametro Defecto*/
console.log("Funcion Con Parametros Por Defectos");
function division(z, k=3){
    return z/k;
}
console.log("Resultado de la division es:", division(40,8));
console.log("Resultado de la division es:", division(40));