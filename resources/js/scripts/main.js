/*José Daniel Santizo Ordóñes 0903-20-23809*/

const canvas = document.getElementById('lienzo'); //Seleccionamos el canvas
const ctx = canvas.getContext('2d') //Decimos que trabajaremos con graficos en 2d

//Obtener dimensiones
const wdt = canvas.width = window.innerWidth; 
const hgt = canvas.height = window.innerHeight;

ctx.fillStyle = '#1d1e29'; //Color de fondo
ctx.fillRect(0,0,wdt,hgt) //La pos inicial

const cols = Math.floor(wdt / 20) + 1; //Se divide el lienzo en 40 col
const pos_y = Array(cols).fill(0); //Inidicamos que empieza el trazado desde arriba

function showRain() {
    //Dibuja el bloque para el numero
    ctx.fillStyle = '#1a1b2633';
    ctx.fillRect(0, 0, wdt, hgt);

    //Pone el color de la letra en aqua 
    ctx.fillStyle = '#2effeb';
    ctx.font = '25pt monospace';

    //Por cada columna coloca un numero al azar
    pos_y.forEach((y, ind) => {
        //Genera un caracter al azar
        const numero = Math.floor(Math.random()*10)+1;

        //Coordina las posiciones en x
        const x = ind * 20;
        //Renderiza el numero en x,y
        ctx.fillText(numero, x, y);

        //Resetea la columna al llegar al maximo
        if (y > 100 + Math.random() * 10000) pos_y[ind] = 0;
        //Solo mueve la col 20px hacia abajo
        else pos_y[ind] = y + 20;
    });
}

setInterval(showRain, 50); //Se ejecute cada 50ms