const shopifyRequest = require('../helpers/shopifyRequest')
const OrderService = require('../services/order.service')

module.exports = {
    createOrder: (req, res) =>
        shopifyRequest(OrderService.createDraftOrder, {
            input: {
                customerId: `gid://shopify/Customer/${req.body.customerId}`,
                taxExempt: true,
                lineItems: req.body.products,
                customAttributes: req.body.customAttributes
            }
        })
            .then((draftOrder) =>
                shopifyRequest(OrderService.markDraftOrderComplete, {
                    id: draftOrder.data.data.draftOrderCreate.draftOrder.id
                })
            )
            .then((completeOrder) => res.send(completeOrder.data))
            .catch((e) => console.log(e))
}
