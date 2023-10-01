const homeController = require('../app/http/controllers/homeController')
const searchController = require('../app/http/controllers/searchController')

function initRoutes(app) {
    app.get('/', homeController().index)
    app.post('/lookup', searchController().index)
}

module.exports = initRoutes