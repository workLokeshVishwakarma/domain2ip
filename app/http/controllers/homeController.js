function homeController() {
    return {
        index(req, res) {
            return res.render('home', { title: "( Domain 2 IP / URL 2 IP ) - Converter", ip: "" })
        }
    }
}

module.exports = homeController