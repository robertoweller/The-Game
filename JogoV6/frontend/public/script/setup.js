const socket = io()
const list = document.querySelector('ul')

let canvas
let ctx
let players
let fruit

function createCanvas(cnvs) {
    if (document.querySelector('canvas')) return window.location.reload()

    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')
    
    canvas.width = cnvs.width
    canvas.height = cnvs.height

    ctx.fillStyle = cnvs.color
    ctx.fillRect(0, 0, cnvs.width, cnvs.height)

    document.body.appendChild(canvas)
}

socket.on('initializeGame', (contenders, cnvs, cfg, berry) => {
    createCanvas(cnvs)

    players = contenders
    fruit = berry

    requestAnimationFrame(() => renderizer(cfg, cnvs))
})

socket.on('updatePlayer', contenders => {
    players = contenders
    console.log(contenders)
})

socket.on('updateFruit', berry => fruit = berry)

socket.on('scoreData', (data, cfg) => {
    list.innerHTML = ''
    
    data.forEach(contender => {
        if (contender.id == socket.id) {
            list.innerHTML +=
                `<li style="color: ${cfg.yourColor}">${contender.id} | ${contender.score}</li>`
        }
        else {
            list.innerHTML +=
                `<li style="color: ${cfg.enemyColor}}">${contender.id} | ${contender.score}</li>`
        }
    })
})

document.onkeydown = event => {
    socket.emit('keyHasBeenPressed', event.key)
}

