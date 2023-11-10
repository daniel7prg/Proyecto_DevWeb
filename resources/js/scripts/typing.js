//Pequeño programa que maneja la escritura dinamica de texto por pantalla

const typed = new Typed('.typed',{
    stringsElement: '#myInfo', //ID del elemento con el texto a mostrar
    typeSpeed: 75, //Velocidad de escritura
    startDelay: 300, //Tiempo de espera para animacion type
    backSpeed: 75, //Velocidad de borrado
    smartBackspace: true, //Filtra solo las palabras aceptadas
    shuffle: false, //Altera el orden de las palabras
    backDelay: 1500, //Tiempo de espera para animacion back
    loop: true, //Repite los elementos del arreglo
    loopCount: false, //Cantidad de veces a repetir, false=infinito
    showCursor: false, //Muestra el cursor
    cursorChar: '|', //Caracter para el cursor
    contentType: 'html' //'html' o 'null' para texto sin formato
});