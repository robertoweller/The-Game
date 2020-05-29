const updatePlayers = require('./updatePlayers')

module.exports = function removePlayer(socket, players) {
    console.log(`Player ${socket.id} has disconnected.`)
    players = players.filter(player => player.id != socket.id)
    
    updatePlayers(socket, players)
    return players
}