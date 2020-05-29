const config = require('../config.json')

module.exports = function generateCoordinate(arg) {
    if (arg == 'generateX')
        return Math.floor(Math.random() * (config.canvas.width / 10)) * 10
        
    else if (arg == 'generateY') 
        return Math.floor(Math.random() * (config.canvas.height / 10)) * 10
}