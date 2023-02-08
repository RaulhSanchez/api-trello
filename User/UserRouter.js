const router = require('express').Router() 
const controller = require('./UserController')

router.post('/singup',  controller.createUser )
router.post('/singin',  controller.login )



module.exports = router;