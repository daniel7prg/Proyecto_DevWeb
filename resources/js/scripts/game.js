/*José Daniel Santizo Ordóñez 0903-20-23809 */

let producto = 1; //Para guardar el resultado de la multiplicacion
let clicksValue = 0; //Contador de clicks
let respuesta = 0; //Para guardar el valor al azar de entro los multiplos
let contProblemas = 0; //Para conocer el ejercicio actual
let indice = 1; //Para conocer la pos de los elementos HTML (buttons)
let flagRes = false; //Bandera que indica el click del boton responder

//Funcion para obtener el producto al azar
function getResults(){
    //Dentro de este arreglo se encuentran los multiplos de las tablas del 1 al 10
    let multiplos = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,18,20,21,24,25,27,28,30,32,35,36,40,42,45,48,49,50,
    54,56,60,63,64,70,72,80,81,90,100];
    
    //Obtengo un numero al azar empleando la longitud del arreglo como rango
    const multiploAlazar = Math.floor(Math.random() * multiplos.length);
    let resultado = multiplos[multiploAlazar];

    return resultado;
}

//Configuracion de los botones de los numeros, se hace global para que se ejecute una sola vez
let listaNums = document.getElementById('contenedor_sel');

//---Funcion para el eventListener---
//Como todo el contenedor tiene un evento, se filtra solo para que funcione con los botones
//Al contenedor de los numeros le agrego un evento, lo que implica que sus hijos también tienen esta caracteristica
const filEvent = (evento) => {
    if(evento.target && evento.target.tagName === 'BUTTON'){
        if(clicksValue<=2){
            const digito = evento.target.id; //Obtengo el id del boton

            //Declaro los casos en una hash-table 
            const opNums = { num1: 1, num2: 2, num3: 3, num4: 4, num5: 5, num6: 6, 
                num7: 7, num8: 8, num9: 9, num10: 10 };

            //Dependiendo del id el numero sera almacenado en la variable
            let numero = opNums[digito];
            setNums(numero); //Para colocar en pantalla los numeros
        }
    }
}

//Esto se hace para optimizar el rendimiento 
listaNums.addEventListener('click', filEvent);

//Funcion para el eventListener del boton responder
const verifyRes = () =>{
    clicksValue++;
    flagRes = true;
    answer();
}

//Funcion para validar la respuesta
function setRes(){
    let responder = document.getElementById(`res${indice}`)
    responder.addEventListener('click', verifyRes);
}

//Funcion para desactivar el eventListener de responder
function delRes(){
    let responder = document.getElementById(`res${indice}`)
    responder.removeEventListener('click', verifyRes);
}

//Funcion para el boton de nuevo
const retryGame = () =>{
    location.reload();
}

//Se reinicia el juego al presionar el boton
function setAgain(){
    let home = document.getElementById('again');
    home.addEventListener('click', retryGame);
}

let btnFunc = document.getElementById('contenedor_func');

//Mostrar botones inicio y de nuevo
function showBT(){ 
    btnFunc.style.display = 'inline-flex';
    setAgain(); 
}

//Ocultar botones inicio y de nuevo
function hidBT(){ btnFunc.style.display = 'none' }

//FUncion que realiza la multiplicacion
function playGame(num){
    producto *= num;
}

function setNums(numero){
    clicksValue++;
    if(clicksValue==1){
        let factor1 = document.getElementById(`multiplicando${indice}`);
        factor1.innerHTML = numero; //Se escribe el numero en el boton
        playGame(numero);
    }
    else if(clicksValue==2){
        let factor2 = document.getElementById(`multiplicador${indice}`);
        factor2.innerHTML = numero;
        playGame(numero);
        //Se elimina el eventListener para qye no se puedan digitar mas numeros
        listaNums.removeEventListener('click', filEvent); 
        setRes();
    }
}

//Similar al caso de listas 
let ejercicios = document.getElementById('contenedor_op1');

//Se analiza el resultado
function answer(){
    //Sirve para colocar el icono de correcto/incorrecto
    let resProb = document.getElementById(`validacion${indice}`)

    if(clicksValue==3 && flagRes==true){
        if(producto==respuesta){
            let good = `<i class="fa-solid fa-check fa-bounce" id="correcto"></i>`;
            resProb.innerHTML = good;
        }
        else{
            let wrong = `<i class="fa-solid fa-xmark fa-bounce" id="incorrecto"></i>`;
            resProb.innerHTML = wrong;
        }
        if(contProblemas<=4){
            indice++; 
            resetValues(); //Funcion para resetear los valores del juego
            initGame(); //Funcion para resetear los valores del juego
            listaNums.addEventListener('click', filEvent);
            delRes();
        }
        else{
            let thanks = document.getElementById('contenedor_tks');
            thanks.innerHTML = 'Gracias por Jugar!!'
            listaNums.removeEventListener('click', filEvent);
            showBT();
        }
    }
}

//Para iniciar el juego
function initGame(){
    respuesta = getResults();
    contProblemas++;
    let impRes = document.getElementById(`producto${indice}`);
    impRes.innerHTML = respuesta;
    hidBT();
}

//Para reiniciar los valores al iniciar un nuevo juego
function resetValues(){
    producto = 1;
    clicksValue = 0;
}

initGame(); //Llamada para dar comienzo al juego