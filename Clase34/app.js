

// Comentario

/*

    Comando 
    de 
    varias
    lineas

*/

// Console.log -> muestra en la consola del navegador los textos o variables que le pongamos

console.log("Hola Mundo JS");

console.log('Segunda linea de codigo');

// Definimos una variable con la palabra let
// Los datos que definimos con "" son cadenas de texto -> STRING
let nombre = 'Luis';

console.log('El valor de la varibale nombre es:');
console.log(nombre);

// Puedo modificar le valor de una variable
nombre = 'Marcos';

console.log('Nombre despues de modificarlo');
console.log(nombre);

let edad = 10;

console.log('edad');
console.log(edad);

// BOOLEAN
let mayorEdad = true;
let otromayorEdad = false;

console.log(mayorEdad);

// Sentencia de control: IF - ELSE

if ( mayorEdad === true ) { 
    // Pregunto con ===
    console.log('Eres mayor de edad')
} else {
    console.log('Eres un niño')
}

let precio = 20;
let gastos_envio = 0

if (precio < 50) {
    console.log("Sumar gastos de envio")
    gastos_envio = 5
} else {
    console.log("Gastos de envio son 0")
}

let precio_total = precio + gastos_envio

console.log('precio_total')
console.log(precio_total)

/*

    Como cargar jquery
    Como acceder a elementos de la web
    Como crear eventos
        - Algo que hace el usuario y quiero responder a esa accion
        - Click, doble click, hover, scroll, mover el raton, keypress...

*/

$(document).ready(function() {});

// Seleccionas elementos de la web

// $("h1").addClass("color-red")

// Crear eventos

$("#btn_1").click(function(){
    // NO SE EJECUTA AL PRINCIPIO DE LA CARGA
    // SOLO se ejecuta cuando se produce el evento
    console.log ("Click en el boton")
    $("h1").addClass("color-red")
})

// Añadir / quitar clase




