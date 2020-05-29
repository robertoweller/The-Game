function robotMove() {
    if (robotInfo.x > fruitInfo.x) { // Left
        robotInfo.x -= 10
        robotInfo.tag.style.left = `${robotInfo.x}px`
    }
    if (robotInfo.y > fruitInfo.y) { // Up
        robotInfo.y -= 10
        robotInfo.tag.style.top = `${robotInfo.y}px`
    }
    if (robotInfo.x < fruitInfo.x) { // Right
        robotInfo.x += 10
        robotInfo.tag.style.left = `${robotInfo.x}px`
    }
    if (robotInfo.y < fruitInfo.y) { // Down
        robotInfo.y += 10
        robotInfo.tag.style.top = `${robotInfo.y}px`
    }

    // coordinates are under the stage.
    coordinates[0].innerHTML = `${robotInfo.x}`;
    coordinates[1].innerHTML = `${robotInfo.y}`;

    setTimeout(robotMove, gamemode)
}