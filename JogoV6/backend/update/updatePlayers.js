const sendScore = require('./sendScore')

module.exports = function updatePlayers(socket, players) {
    sendScore(socket, players)
    
    socket.emit('updatePlayer', players)
    socket.broadcast.emit('updatePlayer', players)
}