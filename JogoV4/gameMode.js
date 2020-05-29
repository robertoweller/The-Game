var btneasy = document.getElementById('btneasy');
var btnmedium = document.getElementById('btnmedium');
var btnhard = document.getElementById('btnhard');
var gamemode;

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
