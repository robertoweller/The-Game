const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const router = require('./routes/routes')(app, express)

const config = require('./config.json')
const generateCoordinate = require('./gen/generateCoordinate')
const addPlayer = require('./update/addPlayer')
const removePlayer = require('./update/removePlayer')
const keyBoardHandler = require('./key/keyboardHandler')

const canvasLimit = {
    X: config.canvas.width - config.Pixel,
    Y: config.canvas.height - config.Pixel 
}

const fruit = {
    exist: true,
    color: config.fruitColor,
    posX: generateCoordinate('generateX'),
    posY: generateCoordinate('generateY')
}

app.use(router)
http.listen(config.port, () => {
    console.log('\nRunning on port: '+ config.port)
    console.log('Press ^c to Shutdown Server.\n')
})

let players = []
io.on('connection', socket => {
    addPlayer(players, socket, fruit, generateCoordinate)

    socket.on('keyHasBeenPressed', keyPressed => {
        keyBoardHandler(socket, players, keyPressed, fruit, canvasLimit)
    })
    
    socket.on('disconnect', () => players = removePlayer(socket, players))
})