const updateFruit = require('../update/updateFruit')
const sendScore = require('../update/sendScore')
const generateCoordinate = require('./generateCoordinate')
const config = require('../config.json')

module.exports = function generateFruit(socket, fruit, players) {
    sendScore(socket, players)
    updateFruit(socket, fruit)

    setTimeout(() => {
        [
            fruit.posX,
            fruit.posY,
            fruit.exist
        ] = [
            generateCoordinate('generateX'),
            generateCoordinate('generateY'),
            true
        ]

        updateFruit(socket, fruit)
    }, config.fruitRespawnTime)
}