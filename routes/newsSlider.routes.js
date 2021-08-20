const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsSlider.controller.js');
const middlewareLogin = require('../middlewares/middlewareLogin.js')


router.post('/createNew', middlewareLogin.middleLogin,newsController.insertNew)

router.get('/getNews', newsController.getNews)

router.delete('/deleteNew', middlewareLogin.middleLogin,newsController.deleteNew)


module.exports = router