const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controller = require('./UserController')

router.post('/singup',  controller.createUser )
router.post('/singin',  controller.login )



module.exports = router;