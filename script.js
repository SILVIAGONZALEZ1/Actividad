let indice = 0; // Índice que quieres evaluar
let dia = ["Lunes", "Martes", "Otro dia"];
switch (indice) {
    case 0: console.log(dia[0]); break;
    case 1: console.log(dia[1]); break;
    default: console.log(dia[2]);
}







/*Actividad práctica:


Crear un archivo .js.
Imprimir mensajes en la consola con console.log().
Ejercicios:*/
/*
1. Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.*/
let nombre = "Silvia";
console.log(`Hola mi nombre es: ${nombre}`);

/*
2.Declara y suma dos números, muestra el resultado en consola.*/
let num1 = 10;
let num2 = 20;
console.log("La suma de " + num1 + " y " + num2 + " es: " + (num1 + num2));

/*
3. Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.*/
console.log(10 > 5 && 5 < 2); // false
console.log(10 > 5 || 5 < 2); // true


/*
4. Declara variables con let y const y nota las diferencias al intentar cambiarlas.*/
let edad = 25;
edad = 30; // Esto funciona
console.log("Edad actual: " + edad);

const pi = 3.1416;
// pi = 3.14; // Esto generaría un error, porque las constantes no pueden ser reasignadas.
console.log("El valor de pi es: " + pi);

/*
5. Escribe un comentario que explique qué hace tu código.*/

// Este código calcula el área de un rectángulo.
let base = 10;
let altura = 5;
console.log("El área del rectángulo es: " + base * altura);

/*
6. Declara una variable de tipo boolean y úsala en una operación lógica.*/
let esMayorDeEdad = true;
console.log("¿Es mayor de edad? " + esMayorDeEdad && "Puede votar.");

/*
7. Imprime el tipo de dato de una variable usando typeof.*/
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof */
let valor = ["holas" , "peras"];
console.log("El tipo de valor es: " + typeof valor);

/*
8. Declara un array y muestra uno de sus elementos en la consola.*/
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array */
/*
let frutas = ["Manzana", "Banana", "Peras"];

console.log(frutas.length);*/

/*
let frutas = ["manzana", "banana", "naranja"];
console.log("La primera fruta es: " + frutas[0]);
*/
let frutas = ["Manzana", "Banana"];

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
  });
  
  // Manzana 0
  // Banana 1


/*
9. Usa una operación con % para encontrar el resto de 17 ÷ 3.*/

console.log("El resto de 17 ÷ 3 es: " + (17 % 3));

/*
10.Declara una variable sin valor e imprime su valor inicial.*/
let sinValor;
console.log("El valor inicial de la variable es: " + sinValor); // undefined


// Primera clase javascript
/*let nombre = 'Juan';
const edad = 12;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);


/*let suma = 1000.50 / 50000000;
console.log(`La suma de 10000 + 500000 es ${suma}`);

if (edad >= 18) {
    console.log(`Eres mayor de edad`);
}else {
    console.log(`Eres menor de edad.`);
}*/
