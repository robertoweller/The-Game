const config = require('../config.json')

module.exports = function sendScore(socket, players) {
    let playerLength = players.length - 1
    
    for (let loop = 0; loop < playerLength; loop++) {
        for (let index = 0; index < playerLength; index++) {
            let player0 = players[index]
            let player1 = players[index + 1]
            
            if (player0.score > player1.score) {
                players[index] = player0
                players[index + 1] = player1
            }

            else if (player0.score < player1.score) {
                players[index] = player1
                players[index + 1] = player0
            }
        }
    }

    let playersLimited = []

    for (let index = 0; index < config.maxPlayersOnList; index++) {
        playersLimited.push(players[index])

        if (!players[index + 1]) break
    }
    
    playersLimited = playersLimited.map(contender => {
        if (!contender) return
        
        return {
            id: contender.id,
            score: contender.score
        }}
    )

    socket.emit('scoreData', playersLimited, {
        yourColor: config.yourColor, 
        enemyColor: config.enemyColor
    },
    config
    )

    socket.broadcast.emit('scoreData', playersLimited, {
        yourColor: config.yourColor, 
        enemyColor: config.enemyColor
    },
    config
    )
}