// <--- server config --->

const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

http.listen(port, () => {
    console.log('Working on: '+ port)
    console.log('Press ^c to Shutdown Server.')
})

// <--- game config --->

const interval = 25, timeout = 2000
var playersInfoDB = []
var fruitInfo = {
                'x': Math.floor(Math.random() * 29) * 10,
                'y': Math.floor(Math.random() * 29) * 10,
                }

// <--- Server Functions --->

io.on('connection', socket => {
    playersInfoDB[`${socket.id}`] = {
                                    'id': socket.id,
                                    'x': Math.floor(Math.random() * 29) * 10,
                                    'y': Math.floor(Math.random() * 29) * 10,
                                    'score': 0
                                    }    
})
// <--- Player Connection --->

io.on('connection', socket => {
    console.log(`User has connected the mini-game: ${socket.id}`)  
    socket.emit('fruitAppears', fruitInfo.x, fruitInfo.y)

    var render = setInterval(() => {
            socket.emit('Initialize', socket.id, playersInfoDB[socket.id].x, playersInfoDB[socket.id].y)
            socket.broadcast.emit('Initialize', socket.id, playersInfoDB[socket.id].x, playersInfoDB[socket.id].y)
        

         // <-- Player Over Fruit --> 

        if (playersInfoDB[socket.id].x == fruitInfo.x &&
            playersInfoDB[socket.id].y == fruitInfo.y) {
                playersInfoDB[socket.id].score++
                
                socket.emit('fruitDisappear')
                socket.broadcast.emit('fruitDisappear')
    
                fruitInfo.x = fruitInfo.y = null
                
                
                setTimeout(() => {
                    fruitInfo.x = Math.floor(Math.random() * 29) * 10
                    fruitInfo.y = Math.floor(Math.random() * 29) * 10
                    
                    socket.emit('fruitAppears', fruitInfo.x, fruitInfo.y)
                    socket.broadcast.emit('fruitAppears', fruitInfo.x, fruitInfo.y)
                },timeout)
            }
    }, interval)

    socket.on('playerReset', (id) => {
        playersInfoDB[id].score = 0
    })

    socket.on('disconnect', () => {
        clearInterval(render)
        console.log(`User has disconnected the mini-game: ${socket.id}`)    
        
        socket.emit('playerDisconnected', socket.id)
        socket.broadcast.emit('playerDisconnected', socket.id)
    })
})

// <--- Player Movements --->

io.on('connection', socket => {
    socket.on('move', btnPressed => {
        if (btnPressed == 37 && playersInfoDB[socket.id].x > 0) {
            playersInfoDB[socket.id].x -= 10
        }
    
        else if (btnPressed == 38 && playersInfoDB[socket.id].y > 0) {
            playersInfoDB[socket.id].y -= 10
        } 
    
        else if (btnPressed == 39 && playersInfoDB[socket.id].x < 290) {
            playersInfoDB[socket.id].x += 10
        }
    
        else if (btnPressed == 40 && playersInfoDB[socket.id].y < 290) {
            playersInfoDB[socket.id].y += 10
        }
    })
})
