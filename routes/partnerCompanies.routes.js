const express = require('express')
const router = express.Router()
const CompaniesController = require('../controllers/partnerCompanies.controller.js');
const middlewareLogin = require('../middlewares/middlewareLogin.js')


router.post('/createCompanie', middlewareLogin.middleLogin,CompaniesController.insertCompanie)

router.get('/getCompanies', CompaniesController.getCompanies)

router.delete('/deleteCompanies', middlewareLogin.middleLogin,CompaniesController.deleteCompanies)


module.exports = router