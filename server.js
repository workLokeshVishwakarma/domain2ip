const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)

app.use((req, res) => {
    res.status(404).render('errors/404', { reqUrl: req.url, title: req.url })
})

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})