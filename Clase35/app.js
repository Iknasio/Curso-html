/*

    - Añadir eventos
    - Modificar elementos
        + Añadir/quitar clases
        + Cambiar CSS en linea
        + Añadir elementos nuevos / textos
    - Usar metodos de jQuery por defecto

    - Ejemplos
        + Animar elemnto con un boton
        + Tabs
        + Pop up

*/

/*
    Cuando clico en el boton quiero añadir una animacion

    Cuando -> Evento de click -> EVENTO
    Donde -> En el boton -> EL ELEMENTO QUE DESENCADENA EL EVENTO

    Que -> Añadir una animacion al cuadrado

*/

console.log('App.js CARGADO')

$('#btnStart').click(function(){
    console.log('Boton START clicado')
    // Añadir una animacion al cuadrado
    cuadrado_rotando = true
    // -> Añadir la clase rotar al cuadrado
    $('.cuadrado').addClass('rotar')
})

$('#btnStop').click(function(){
    console.log('Boton STOP clicado')
    // Eliminar una animacion al cuadrado
    cuadrado_rotando = false
    // -> Quitar la clase rotar al cuadrado
    $('.cuadrado').removeClass('rotar')
})


// Añadir la clase rotar cuando este parado
// Quitar la clase rotan cuando este en movimiento

// Va a determinar cuando el cuadrado esta rotando
let cuadrado_rotando = false

/* $('#btnStartStop').click(function(){
    console.log('Empezar / Parar')

    console.log('Cuadrado rotando', cuadrado_rotando)

    if(cuadrado_rotando === false){ // Preguntamos si el cuadrado_rotando es falso
        $('.cuadrado').addClass('rotar')
        cuadrado_rotando = true // Cambiar el estado de la variable
        console.log('CLASE AÑADIDA')
    }else{
        $('.cuadrado').removeClass('rotar')
        cuadrado_rotando = false
        console.log('CLASE QUITADA')
    }

}) */

$('#btnStartStop').click(function(){
    // Te añade la case si no la tienes y la quita si la tienes
    $('.cuadrado').toggleClass('rotar')
})

/*
Cuando pulse en el boton B (Click en el btn2)
    Quitar la clase .activo a TODOS los elementos
    Añadir la clase .activo SOLO a tabs__item-b
*/

$('#btn_b').click(function(){
    // Le quito la clase a TODOS los elemntos que cumplen la seleccion  
    $('.tabs__item').removeClass('activo')

    $('.tabs__item-b').addClass('activo')
})

$('#btn_a').click(function(){
    // Le quito la clase a TODOS los elemntos que cumplen la seleccion  
    $('.tabs__item').removeClass('activo')

    $('.tabs__item-a').addClass('activo')
})

$('#btn_c').click(function(){
    // Le quito la clase a TODOS los elemntos que cumplen la seleccion  
    $('.tabs__item').removeClass('activo')

    $('.tabs__item-c').addClass('activo')
})