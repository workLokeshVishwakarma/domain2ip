var dns = require('dns')

const searchController = () => {
    return {
        async index(req, res) {
            await dns.lookup(req.body.domain, (err, addresses, family) => {
                return res.render('home', {
                    title: "Lookup - ( Domain 2 IP / URL 2 IP ) - Converter",
                    ip: addresses
                })
            })
        }
    }
}

module.exports = searchController