module.exports.transactionEntity = (body) => ({
    id: body.id,
    totalPrice: body.total_price,
    totalBonusAmount: body.note_attributes.filter((item) => item.name === 'bonusTotalAmount')[0]
        .value,
    branchId: body.note_attributes.filter((item) => item.name === 'branchId')[0].value,
    sortDate: new Date().toISOString(),
    note: body.note,
    currency: body.currency,
    products: [],
    customer: {
        id: body.customer.id,
        firstName: body.customer.first_name,
        lastName: body.customer.last_name,
        email: body.customer.email,
        phone: body.customer.phone
    }
})

module.exports.productEntity = (product) => ({
    id: product.id,
    title: product.title,
    bonusPercentage: product.product ? product.product.tags[0] : null,
    priceAmount: product.originalUnitPriceSet.shopMoney.amount,
    priceCurrency: product.originalUnitPriceSet.shopMoney.currencyCode,
    image: product.image ? product.image.originalSrc : null
})

module.exports.transactionInput = (transaction) => ({
    id: transaction.id,
    totalPrice: transaction.totalPrice,
    totalBonusAmount: transaction.totalBonusAmount,
    branchId: transaction.branchId,
    note: transaction.note,
    currency: transaction.currency,
    sortDate: transaction.sortDate,
    products: transaction.products.map((product) => ({
        id: product.id,
        title: product.title,
        bonusPercentage: product.bonusPercentage,
        priceAmount: product.priceAmount,
        priceCurrency: product.priceCurrency,
        image: product.image
    })),
    customer: {
        id: transaction.customer.id,
        firstName: transaction.customer.firstName,
        lastName: transaction.customer.lastName,
        email: transaction.customer.email,
        phone: transaction.customer.phone
    }
})
