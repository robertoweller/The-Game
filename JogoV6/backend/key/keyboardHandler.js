const updatePlayers = require('../update/updatePlayers')
const playerMay = require('./playerMay')
const fruitHasBeenEaten = require('../other/fruitHasBeenEaten')
const generateFruit = require('../gen/generateFruit')
const config = require('../config.json')

module.exports = function keyBoardHandler(socket, players, keyPressed, fruit, canvasLimit) {
    let selectedPlayer = players.find(player => player.id == socket.id)

    switch(playerMay(keyPressed, selectedPlayer, canvasLimit)) {
        case 'goLeft':
            selectedPlayer.posX -= config.Pixel
            updatePlayers(socket, players)
            break
        
        case 'goUp':
            selectedPlayer.posY -= config.Pixel
            updatePlayers(socket, players)
            break
        
        case 'goRight':
            selectedPlayer.posX += config.Pixel
            updatePlayers(socket, players)
            break
        
        case 'goDown':
            selectedPlayer.posY += config.Pixel
            updatePlayers(socket, players)
            break
        }
        
    if (fruitHasBeenEaten(selectedPlayer, fruit, players)) {
        generateFruit(socket, fruit, players)
    }
}