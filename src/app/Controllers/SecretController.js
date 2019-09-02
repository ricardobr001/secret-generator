const sentences = require('../utils/Sentences')

class SecretController {
    generate (req, res) {
        const { name, course } = req.query
        const secret = sentences(name, course)

        return res.json({ secret })
    }
}

module.exports = new SecretController()
