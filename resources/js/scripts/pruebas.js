let producto = 1;
let bandera = false;
let clicksValue = 0;
let respuesta = 0;

function getResults(){
    let multiplos = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,18,20,21,24,25,27,28,30,32,35,36,40,42,45,48,49,50,
    54,56,60,63,64,70,72,80,81,90,100];

    const multiploAlazar = Math.floor(Math.random() * multiplos.length);
    let resultado = multiplos[multiploAlazar];

    return resultado;
}

function selectNums(flag, flagClicks){
    let boton1 = document.getElementById("num1");
    let boton2 = document.getElementById("num2");
    let boton3 = document.getElementById("num3");
    let boton4 = document.getElementById("num4");
    let boton5 = document.getElementById("num5");
    let boton6 = document.getElementById("num6");
    let boton7 = document.getElementById("num7");
    let boton8 = document.getElementById("num8");
    let boton9 = document.getElementById("num9");
    let boton10 = document.getElementById("num10");
    flagClicks = clicksValue

    if(flag==false||flagClicks==0){

        boton1.addEventListener("click",function(){
            flagClicks++;
            setNums(1,flagClicks);
        });
        
        boton2.addEventListener("click",function(){
            flagClicks++;
            setNums(2,flagClicks);
        });
        
        boton3.addEventListener("click",function(){
            flagClicks++;
            setNums(3,flagClicks);
        });
        
        boton4.addEventListener("click",function(){
            flagClicks++;
            setNums(4,flagClicks);
        });
        
        boton5.addEventListener("click",function(){
            flagClicks++;
            setNums(5,flagClicks);
        });
        
        boton6.addEventListener("click",function(){
            flagClicks++;
            setNums(6,flagClicks);
        });
        
        boton7.addEventListener("click",function(){
            flagClicks++;
            setNums(7,flagClicks);
        });
        
        boton8.addEventListener("click",function(){
            flagClicks++;
            setNums(8,flagClicks);
        });
        
        boton9.addEventListener("click",function(){
            flagClicks++;
            setNums(9,flagClicks);
        });
        
        boton10.addEventListener("click",function(){
            flagClicks++;
            setNums(10,flagClicks);
        });
    }
}

function getNums(num, contClicks){ playGame(num, contClicks); }

function setNums(numero, contClicks){ getNums(numero, contClicks) }

function initGame(){
    selectNums()
    respuesta = getResults();
    console.log('Res = '+respuesta)
}

function resetGame(){
    producto = 1;
    bandera = false;
    clicksValue = 0;
    respuesta = 0;
}

function playGame(num, contClicks){
    producto *= num;
    console.log('numPG: '+num)
    console.log('productoPG: '+producto)
    answer(producto,contClicks)
}

function answer(prueba, contClicks){
    console.log('contClicksAN: '+contClicks)
    
    if(contClicks==2){
        if(prueba==respuesta){
            console.log("Es corrrecto xd")
            bandera = true
            selectNums(bandera, contClicks)
            resetGame()
            initGame()
        }
        else{
            console.log('Es incorrecto xd')
            bandera = true
            selectNums(bandera, contClicks)
            resetGame()
            initGame()
        } 
    }
    else{
        console.log('No se ha clickeado 2 veces xd')
    }
}

initGame()