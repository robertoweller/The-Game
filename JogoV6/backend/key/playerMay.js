module.exports = function playerMay(keyPressed, player, canvasLimit) {
    switch(keyPressed) {
        case 'ArrowLeft':
            if (player.posX > 0) 
                return 'goLeft'
            return
            
        case 'ArrowUp': 
            if (player.posY > 0)
                return 'goUp'
            return
        
        case 'ArrowRight':
            if (player.posX < canvasLimit.X)
                return 'goRight'
            return
        
        case 'ArrowDown':
            if (player.posY < canvasLimit.Y)
                return 'goDown'
            return
    }
}