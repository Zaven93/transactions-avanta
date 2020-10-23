const router = require('express').Router()
const customerController = require('../controllers/customerController')

router.get('/:id', customerController.getCustomerById)

module.exports = router
