const express = require('express')
const router = express.Router()
const mapController = require('../controllers//map.controller.js');
const middlewareLogin = require('../middlewares/middlewareLogin.js')


router.post('/createEvent', middlewareLogin.middleLogin, mapController.insertEvent)

router.get('/getEvent', mapController.getEvent)

router.delete('/deleteEvent', middlewareLogin.middleLogin, mapController.deleteEvent)


module.exports = router