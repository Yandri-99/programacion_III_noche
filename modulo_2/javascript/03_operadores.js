console.log("operadores");
console.log("Operadores Aritmeticos");
const numero1=45;
const numero2=2;

/*suma*/
const suma = numero1+numero2;Ñ
console(`$(numero1)+$(numero2)=(suma)`);
/*resta*/
const resta = numero1-numero2;
console(`$(numero1)-$(numero2)=(resta)`);
/*multiplicacion*/
const multiplicacion = numero1*numero2;
console(`$(numero1)*$(numero2)=(multiplicacion)`);
/*division*/
const division = numero1/numero2;
console(`$(numero1)/$(numero2)=(division)`);
/*modulo*/
const modulo = numero1%numero2;
console(`$(numero1)%$(numero2)=(modulo)`);
/*resultado*/
const resultado = numero1**numero2;
console(`$(numero1)**$(numero2)=(resultado)`);

/*Operadores de comparaciom*/ 
console.log("Operadores De Comparacion");
const numero3="5";
console.log(`Igualdad Debil ${numero3}==${numero4}={numero3==numero4}`);
console.log(`Igualdad Estricta ${numero3}===${numero4}={numero3==numero4}`);
console.log(`Desigualdad Debil${numero3}!=${numero4}={numero3!=numero4}`);
console.log(`Desigualdad Estricta${numero3}!==${numero4}={numero3!==numero4}`);
console.log(`Mayor Que ${numero3}>=${numero4}={numero3>=numero4}`);
console.log(`Menor Que ${numero3}<=${numero4}={numero3<=numero4}`);
console.log(`Mayor Igual Que ${numero3}>=${numero4}={numero3>=numero4}`);
console.log(`Menor Igual Que ${numero3}<=${numero4}={numero3<=numero4}`);

/*Operadores Logicos*/
console.log("Operadores Logicos")
//const numero3="5";
//const numero4="5";
console.log(`AND "Y"(${numero3}>=${numero4} && ${numero3}<=${numero4})=${numero3>=numero4&&numero3<=numero4}`);
console.log(`OR "O" (${numero3}==${numero4}|| ${numero3}!=${numero4})=${numero3==numero4||numero3!=numero4}`);
console.log(`!"Negacion" !(${numero3}==${numero4})=${!(numero3==numero4)}`)
console.log(`${numero3!=numero4&&numero3>=numero4}`);
console.log(`${numero3>=numero4&&numero3===numero4}`);
console.log(`${numero3!=numero4||numero3>=numero4}`);
console.log(`${numero3>numero4||numero3!==numero4}`);
console.log(`${!(numero3!=numero4||numero3>=numero4)}`);

//constante numero3 ="5";
//const numero4= 5;
console.log (`${numero3!=numero4&&numero3>=numero4&&numero3>numero4}`);
console.log (`${numero3>numero4&&numero3===numero4&&numero3!==numero4}`);
console.log (`${(numero3!=numero4||numero3>=numero4)&&numero3>=numero4}`);
console.log (`${numero3!=numero4||(numero3!==numero4&&numero3!==numero4)}`);
console.log (`${!(numero3!=numero4||(numero3>=numero4&&numero3!==numero4))}`);