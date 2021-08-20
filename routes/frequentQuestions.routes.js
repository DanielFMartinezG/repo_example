const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/frequentQuestions.controller.js');
const middlewareLogin = require('../middlewares/middlewareLogin.js')


router.get('/getQuestions', questionsController.getQuestions)

router.get('/getQuestionsAbout', questionsController.getQuestionsAbout)


module.exports = router
