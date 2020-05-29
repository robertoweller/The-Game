function playerMove() {
    var key = event.keyCode

    if (key === 37 && playerInfo.x !== 0) { // Left
        playerInfo.x += -1 * speed;
        playerInfo.tag.style.left = `${playerInfo.x}px`;
    }

    else if (key === 38 && playerInfo.y !== 0) { // Up
        playerInfo.y += -1 * speed;
        playerInfo.tag.style.top = `${playerInfo.y}px`;
    }

    else if (key === 39 && playerInfo.x !== 290) { // Right
        playerInfo.x += 1 * speed;
        playerInfo.tag.style.left = `${playerInfo.x}px`;
    }

    else if (key === 40 && playerInfo.y !== 290) { // Down
        playerInfo.y += 1 * speed;
        playerInfo.tag.style.top = `${playerInfo.y}px`;
    }
}