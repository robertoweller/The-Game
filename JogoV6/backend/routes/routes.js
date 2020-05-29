module.exports = function(app, express) {
    const router = express.Router()
    app.use(express.static('../frontend/public'))

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
    
    router.get('*', (req, res) => {
        res.redirect('/')
    })

    return router
}