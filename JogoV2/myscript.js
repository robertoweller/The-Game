var y = 0;
var x = 0;
var player = document.querySelector('#player');
var p = document.querySelector('#p');
var p2 = document.querySelector('#p2');
var fruit = document.getElementById('fruit');
var variavel = 0;
var playerR = document.querySelector('#playerR');
var pXX = 0;
var pYY = 0;
var speed = 10;
var contagem1 = document.getElementById('contagem1');
var c = 0;
var gamemode;

verificador();
var fruitY = variavel
verificador();
var fruitX = variavel
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
    verificador();
    fruitX = variavel
    verificador();
    fruitY = variavel

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
function verificador() {
    var num = Math.floor(Math.random() * 290);

    if (num === 0) {
        variavel = 0
    }
    if (num > 0 && num <= 10) {
        variavel = 10
    }
    if (num > 10 && num <= 20) {
        variavel = 20
    }
    if (num > 20 && num <= 30) {
        variavel = 30
    }
    if (num > 30 && num <= 40) {
        variavel = 40
    }
    if (num > 40 && num <= 50) {
        variavel = 50
    }
    if (num > 50 && num <= 60) {
        variavel = 60
    }
    if (num > 60 && num <= 70) {
        variavel = 70
    }
    if (num > 70 && num <= 80) {
        variavel = 80
    }
    if (num > 80 && num <= 90) {
        variavel = 90
    }
    if (num > 90 && num <= 100) {
        variavel = 100
    }
    if (num > 100 && num <= 110) {
        variavel = 110
    }
    if (num > 110 && num <= 120) {
        variavel = 120
    }
    if (num > 120 && num <= 130) {
        variavel = 130
    }
    if (num > 130 && num <= 140) {
        variavel = 140
    }
    if (num > 140 && num <= 150) {
        variavel = 150
    }
    if (num > 150 && num <= 160) {
        variavel = 160
    }
    if (num > 160 && num <= 170) {
        variavel = 170
    }
    if (num > 170 && num <= 180) {
        variavel = 180
    }
    if (num > 180 && num <= 190) {
        variavel = 190
    }
    if (num > 190 && num <= 200) {
        variavel = 200
    }
    if (num > 200 && num <= 210) {
        variavel = 210
    }
    if (num > 210 && num <= 220) {
        variavel = 220
    }
    if (num > 220 && num <= 230) {
        variavel = 230
    }
    if (num > 230 && num <= 240) {
        variavel = 240
    }
    if (num > 240 && num <= 250) {
        variavel = 250
    }
    if (num > 250 && num <= 260) {
        variavel = 260
    }
    if (num > 260 && num <= 270) {
        variavel = 270
    }
    if (num > 270 && num <= 280) {
        variavel = 280
    }
    if (num > 280 && num <= 290) {
        variavel = 290
    }
}

