const express = require('express');
const router = express.Router();
const heroSliderController = require('../controllers/heroSlider.controller');
const middlewareLogin = require('../middlewares/middlewareLogin.js')


router.get('/getPhrases', heroSliderController.getPhrases)
router.post('/insertPhrase', middlewareLogin.middleLogin, heroSliderController.insertPhrase)
router.delete('/deletePhrase', middlewareLogin.middleLogin, heroSliderController.deletePhrase)

module.exports = router
