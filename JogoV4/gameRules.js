function isOverFruit() {
    if (playerInfo.x === fruitInfo.x && playerInfo.y === fruitInfo.y) {
        fruitInfo.x = fruitInfo.y = 'NaN';
        fruitInfo.tag.style.display = 'none';
        
        playerInfo.points++;
        contagem1.innerHTML = `${playerInfo.points}`
        setTimeout('fruitAppears()', 2000);
    }
    else if (robotInfo.x === fruitInfo.x && robotInfo.y === fruitInfo.y) {
        fruitInfo.x = fruitInfo.y = 'NaN';
        fruitInfo.tag.style.display = 'none';

        robotInfo.points++;
        contagem.innerHTML = `${robotInfo.points}`;
        setTimeout('fruitAppears()', 2000);
    }
}

