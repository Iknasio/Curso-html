

$('#btn_hide').click(function(){
    $('#contenedor_uno').css({
        // 'Clave':'valor',
        color: 'red',
        'background-color': "lightgreen",
    })

    // 
    $('#contenedor_uno').hide()

    console.log('Click en el boton ocultar')
})

$('#btn_show').click(function(){
    $('#contenedor_uno').show()
})