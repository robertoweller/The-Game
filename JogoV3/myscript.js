var y = 0;
var x = 0;
var player = document.querySelector('#player');
var p = document.querySelector('#p');
var p2 = document.querySelector('#p2');
var fruit = document.getElementById('fruit');
var playerR = document.querySelector('#playerR');
var pXX = 0;
var pYY = 0;
var speed = 10;
var contagem1 = document.getElementById('contagem1');
var c = 0;
var gamemode;
var fruitY = Math.floor(Math.random() * 29) * 10;
var fruitX = Math.floor(Math.random() * 29) * 10;
fruit.style.top = `${fruitY}px`
fruit.style.left = `${fruitX}px`
var tot = 0
var contagem = document.getElementById('contagem')
p.innerHTML = `${x}`
p2.innerHTML = `${y}`

function up() {
    y -= 10
    player.style.top = `${y}px`
}
function down() {
    y += 10
    player.style.top = `${y}px`
}
function left() {
    x -= 10
    player.style.left = `${x}px`
}
function right() {
    x += 10
    player.style.left = `${x}px`
}

addEventListener("load", medium);
function bot() {
    if (y > fruitY) {
       up()
    }
    if (y < fruitY) {
        down()
    }
    if (x > fruitX) {
        left()
    }
    if (x < fruitX) {
        right()
    }
    p.innerHTML = `${x}`;
    p2.innerHTML = `${y}`;
    setTimeout(bot, gamemode)
}
setInterval(overfruit, 20);
function overfruit() {
    if (pXX === fruitX && pYY === fruitY) {
        fruit.style.display = 'none';
        fruitX = 'NaN';
        fruitY = 'NaN';
        setTimeout('fruitAppears()', 2000);
        c++;
        contagem1.innerHTML = `${c}`
    }
    if (x === fruitX && y === fruitY) {
        fruitX = 'NaN';
        fruitY = 'NaN';
        fruit.style.display = 'none';
        tot++;
        contagem.innerHTML = `${tot}`;
        setTimeout('fruitAppears()', 2000);
    }

}
var btneasy = document.getElementById('btneasy');
var btnmedium = document.getElementById('btnmedium');
var btnhard = document.getElementById('btnhard');

function easy() {
    gamemode = 270;
    btneasy.style.backgroundColor = 'yellow'
    btnmedium.style.backgroundColor = '';
    btnhard.style.backgroundColor = '';
}
function medium() {
    gamemode = 180;
    btneasy.style.backgroundColor = '';
    btnmedium.style.backgroundColor = 'yellow';
    btnhard.style.backgroundColor = '';
}
function hard() {
    gamemode = 125;
    btneasy.style.backgroundColor = '';
    btnmedium.style.backgroundColor = '';
    btnhard.style.backgroundColor = 'yellow';
}
function fruitAppears() {
    fruitX = Math.floor(Math.random() * 29) * 10;
    fruitY = Math.floor(Math.random() * 29) * 10;

    fruit.style.display = '';
    fruit.style.top = `${fruitY}px`;
    fruit.style.left = `${fruitX}px`;
}

addEventListener("keydown", walk);

function outsiderRight() {
    if (pXX !== 290) {
        return true
    }
}
function outsiderLeft() {
    if (pXX !== 0) {
        return true
    }
}

function outsiderTop() {
    if (pYY !== 0) {
        return true
    }
}

function outsiderDown() {
    if (pYY !== 290) {
        return true
    }
}

function walk() {
    tecla = event.keyCode
    if (tecla === 37 && outsiderLeft()) { //left
        pX = -1;
        pXX += pX * speed;
        playerR.style.left = `${pXX}px`;
    }

    if (tecla === 38 && outsiderTop()) { //top
        pY = -1;
        pYY += pY * speed;
        playerR.style.top = `${pYY}px`;
    }

    if (tecla === 39 && outsiderRight()) { //right
        pX = 1;
        pXX += pX * speed;
        playerR.style.left = `${pXX}px`;
    }

    if (tecla === 40 && outsiderDown()) { //down
        pY = 1;
        pYY += pY * speed;
        playerR.style.top = `${pYY}px`;
    }
}