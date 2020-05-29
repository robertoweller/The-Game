const sendScore = require('../update/sendScore')
const fruitHasBeenEaten = require('./fruitHasBeenEaten')
const generateFruit = require('../gen/generateFruit')
const config = require('../config.json')

module.exports = function initializeGame(socket, players, fruit) {
    let selectedPlayer = players.find(contender => contender.id == socket.id)

    if (fruitHasBeenEaten(selectedPlayer, fruit, players)) {
        generateFruit(socket, fruit, players)
    }

    sendScore(socket, players)

    socket.emit(
        'initializeGame',
        players,
        config.canvas,
        { 
            enemyColor: config.enemyColor,
            yourColor: config.yourColor,
            pixel: config.Pixel
        },
        fruit
    )

    socket.broadcast.emit(
        'updatePlayer',
        players,
    )
}