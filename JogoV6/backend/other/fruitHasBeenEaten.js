module.exports = function fruitHasBeenEaten(selectedPlayer, fruit, players) {
    if (selectedPlayer.posX == fruit.posX && selectedPlayer.posY == fruit.posY) {
        fruit.posX = fruit.posY = null
        fruit.exist = false

        players.find(player => {
            if (player.id == selectedPlayer.id) {
                player.score++
            }
        })
        return true
    }
    return false
}