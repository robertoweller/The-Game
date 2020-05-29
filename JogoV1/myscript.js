document.addEventListener("keydown", move);
document.addEventListener("keydown", verificador2);
var y = 0
var x = 0
var player = document.querySelector('#player');
var p = document.querySelector('#p')
var p2 = document.querySelector('#p2')
var fruit = document.getElementById('fruit')
var variavel = 0
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
var mainn = document.getElementById('main')
var conta = document.getElementById('conta')
mainn.style.display = 'none'
var nomeplayer = document.getElementById('nomedojogador')
var name = document.getElementById('nome').focus()

function boas() {
    alert('bem-vindo!')
}
function verificador2() {
    var tecla = event.keyCode
    if (tecla == 13) {
        menu()
    }
}
function menu() {
    var nome = document.querySelector('#nome').value;

    if (nome.length == 0){
        alert('Digite um nome!')
    }
    if (nome.length < 3) {
        alert('Digite um nome com 3 ou mais caracteres!')
    }
    else {
        mainn.style.display = ''
        conta.style.display = 'none'
        nomeplayer.innerHTML = `| ${nome}`
    }
}

function move() {
    var tecla = event.keyCode;

    if (x == fruitX && y == fruitY) {
        fruit.style.display = 'none'
        fruitY = 300
        fruitX = 300
        tot++
        contagem.innerHTML = `${tot}`
        setTimeout('fruitAppears()', 2000)
    }
    if (tecla == 38) { // up
        if (y == 0) {
            y += 10
        }
        if (y >= 0 && y <= 290) {
            y -= 10
            player.style.top = `${y}px`
        }
    }

    if (tecla == 40) { // down
        if (y == 290) {
            y -= 10
        }
        if (y >= 0 && y <= 290) {
            y += 10
            player.style.top = `${y}px`
        }
    }

    if (tecla == 37) { // left
        if (x >= 0 && x <= 290) {
            if (x == 0) {
                x += 10
            }
            x -= 10
            player.style.left = `${x}px`
        }
    }

    if (tecla == 39) { // right
        if (x >= 0 && x <= 290) {
            if (x == 290) {
                x -= 10
            }
            x += 10
            player.style.left = `${x}px`
        }
    }
    p.innerHTML = `${x}`
    p2.innerHTML = `${y}`
}
function fruitAppears() {
    verificador();
    fruitX = variavel
    verificador();
    fruitY = variavel

    fruit.style.display = ''
    fruit.style.top = `${fruitY}px`
    fruit.style.left = `${fruitX}px`

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
