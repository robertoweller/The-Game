function object(link = null) {
    if (link == null) {
        throw new Error('HTML attribute is not defined!')
    }
    
    this.x = Math.floor(Math.random() * 29) * 10
    this.y = Math.floor(Math.random() * 29) * 10
    this.tag = document.getElementById(link)

    if (link == "robot" || link == "player") {
        this.points = 0
    }
}

addEventListener("keydown", playerMove);

const robotInfo = new object("robot");
const fruitInfo = new object("fruit");
const playerInfo = new object("player");

const coordinates = [document.querySelector('#position_X'),
                     document.querySelector('#position_Y')]

const scoreboard = [document.getElementById('botScore'),
                  document.getElementById('playerScore')]
                  
const speed = 10;
const isThereSomethingOverTheFruitVerification = 20;

function fruitAppears() {
    fruitInfo.x = Math.floor(Math.random() * 29) * 10;
    fruitInfo.y = Math.floor(Math.random() * 29) * 10;

    fruitInfo.tag.style.display = '';
    fruitInfo.tag.style.top = `${fruitInfo.y}px`;
    fruitInfo.tag.style.left = `${fruitInfo.x}px`;
}

function Initializer() {
    fruitInfo.tag.style.top = `${fruitInfo.y}px`;
    fruitInfo.tag.style.left = `${fruitInfo.x}px`;
    playerInfo.tag.style.top = `${playerInfo.y}px`;
    playerInfo.tag.style.left = `${playerInfo.x}px`;
    
    medium()
    robotMove()
}

setInterval(isOverFruit, isThereSomethingOverTheFruitVerification);


