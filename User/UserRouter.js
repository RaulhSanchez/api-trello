const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controller = require('./UserController')

router.post('/alta',  controller.createUser )



module.exports = router;