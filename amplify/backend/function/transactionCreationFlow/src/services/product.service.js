module.exports.getProducts = /* GraphQL */ `
    query Products {
        products(first: 7) {
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
                node {
                    description(truncateAt: 100)
                    id
                    tags
                    title
                    variants(first: 1) {
                        edges {
                            node {
                                price
                            }
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`

module.exports.nextProducts = /* GraphQL */ `
    query nextProducts($cursor: String) {
        products(first: 7, after: $cursor) {
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
                node {
                    description(truncateAt: 100)
                    id
                    tags
                    title
                    variants(first: 1) {
                        edges {
                            node {
                                price
                            }
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`

module.exports.previousProducts = /* GraphQL */ `
    query previousProducts($cursor: String) {
        products(first: 7, before: $cursor) {
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
                node {
                    description(truncateAt: 100)
                    id
                    tags
                    title
                    variants(first: 1) {
                        edges {
                            node {
                                price
                            }
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`
