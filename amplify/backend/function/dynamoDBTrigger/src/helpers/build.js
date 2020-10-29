module.exports.createDynamoDBStream = () => ({
    paymentRequestId: '',
    NewImage: {
        status: '',
        bonusAmount: '',
        customerId: '',
        products: [],
        customAttributes: []
    },
    OldImage: {
        status: ''
    },
    eventName: ''
})

module.exports.updateDynamoDBStream = (dynamoDBStream, record) => {
    dynamoDBStream.paymentRequestId = record.dynamodb.Keys.id.S
    dynamoDBStream.NewImage.status = record.dynamodb.NewImage
        ? record.dynamodb.NewImage.status.S
        : ''
    dynamoDBStream.OldImage.status = record.dynamodb.OldImage.status.S
    dynamoDBStream.eventName = record.eventName
    dynamoDBStream.NewImage.bonusAmount = record.dynamodb.NewImage
        ? record.dynamodb.NewImage.bonusAmount.N
        : ''
    dynamoDBStream.NewImage.customerId = record.dynamodb.NewImage
        ? record.dynamodb.NewImage.customerId.S
        : ''
    dynamoDBStream.NewImage.products = record.dynamodb.NewImage
        ? record.dynamodb.NewImage.products.L.map((product) => ({
              originalUnitPrice: product.M.originalUnitPrice.N,
              quantity: product.M.quantity.N,
              variantId: product.M.variantId.S
          }))
        : ''
    dynamoDBStream.NewImage.customAttributes = [
        {
            key: 'bonusTotalAmount',
            value: record.dynamodb.NewImage ? record.dynamodb.NewImage.bonusAmount.N : ''
        },
        {
            key: 'branchId',
            value: record.dynamodb.NewImage ? record.dynamodb.NewImage.branchId.S : ''
        }
    ]
}
