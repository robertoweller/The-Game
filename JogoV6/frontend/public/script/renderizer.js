function renderizer(cfg, cnvs) {
    ctx.fillStyle = cnvs.color
    ctx.fillRect(0, 0, cnvs.width, cnvs.height)

    if (fruit.exist) {
        ctx.fillStyle = fruit.color
        ctx.fillRect(fruit.posX, fruit.posY, cfg.pixel, cfg.pixel)
    }

    players.forEach(contender => {
        if (contender.id == socket.id) {
            ctx.fillStyle = cfg.yourColor
            ctx.fillRect(contender.posX, contender.posY, cfg.pixel, cfg.pixel)
        }
        else {
            ctx.fillStyle = cfg.enemyColor
            ctx.fillRect(contender.posX, contender.posY, cfg.pixel, cfg.pixel)
        }
    })

    requestAnimationFrame(() => renderizer(cfg, cnvs))
}