const initializeGame = require('../other/initializeGame')

module.exports = function addPlayer(players, socket, fruit, generateCoordinate) {
    console.log(`Player ${socket.id} has connected.`)
    
    players.push({ 
        "id": socket.id,
        "posX": generateCoordinate('generateX'),
        "posY": generateCoordinate('generateY'),
        "score": 0
    })

    initializeGame(socket, players, fruit)
}