module.exports = function updateFruit(socket, fruit) {
    socket.emit('updateFruit', fruit)
    socket.broadcast.emit('updateFruit', fruit)
}