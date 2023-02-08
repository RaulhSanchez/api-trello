const router = require('express').Router() 
const controller = require('./PanelController')

router.post('/createPanel',controller.createPanel)

module.exports = router