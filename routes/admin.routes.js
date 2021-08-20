const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin.controller.js');
const middlewareLogin = require('../middlewares/middlewareLogin.js')

router.post('/createAdmin', adminController.createAdmin)

router.get('/getAdmin', middlewareLogin.middleLogin, adminController.getAdmin)

router.post('/login', adminController.login)

router.get('/validateToken/:token', adminController.validateToken)


module.exports = router