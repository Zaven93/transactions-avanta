const router = require('express').Router()
const shopifyController = require('../controllers/shopifyController')

router.get('/', shopifyController.shopify)
router.get('/callback', shopifyController.shopifyCallback)

module.exports = router
