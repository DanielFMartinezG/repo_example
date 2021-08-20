const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staff.controller');
const middlewareLogin = require('../middlewares/middlewareLogin.js')


router.post('/createStaff', middlewareLogin.middleLogin, staffController.insertStaff)

router.get('/getStaff', staffController.getStaff)

router.delete('/deleteStaff', middlewareLogin.middleLogin, staffController.deleteStaff)


module.exports = router