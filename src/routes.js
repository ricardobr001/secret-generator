const express = require('express')
const routes = express.Router()

const SecretController = require('./app/Controllers/SecretController')

routes.get('/', (req, res) => {
    return res.json({ ok: 'ok' })
})

routes.get('/secret', SecretController.generate)

module.exports = routes
