const express = require('express')
const router = express.Router()
const sliderController = require('../controllers/sliderAboutUs.controller.js');
const middlewareLogin = require('../middlewares/middlewareLogin.js')


router.post('/slider/insertImages', middlewareLogin.middleLogin,sliderController.insertImage)

router.get('/slider/getImages', sliderController.getImages)

router.delete('/slider/deleteImages', middlewareLogin.middleLogin,sliderController.deleteImages)

module.exports = router