import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { API, graphqlOperation } from 'aws-amplify'
import createApp from '@shopify/app-bridge'
import { Redirect, ResourcePicker } from '@shopify/app-bridge/actions'
import gql from 'graphql-tag'
import { print } from 'graphql'
import {
    Card,
    DataTable,
    Button,
    Page,
    Pagination,
    TextField,
    ChoiceList,
    Filters,
    Icon,
    Stack
} from '@shopify/polaris'
import {
    SearchMajorMonotone,
    TransactionMajorMonotone,
    BalanceMajorMonotone
} from '@shopify/polaris-icons'
import { toCurrency, formatDate, extractNumbersFromString } from '../utils/helper'
import config from '../aws-exports'

API.configure(config)

const listTransactions = gql`
    query listTransactions($limit: Int, $nextToken: String) {
        listTransactions(limit: $limit, nextToken: $nextToken) {
            nextToken
            items {
                id
                totalPrice
                totalBonusAmount
                note
                currency
                products {
                    id
                    title
                    bonusPercentage
                    priceAmount
                    priceCurrency
                    image
                }
                customer {
                    id
                    firstName
                    lastName
                    phone
                    email
                }
                createdAt
            }
        }
    }
`

const paymentSubscription = gql`
    subscription paymentRequest {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            orderId
            updatedAt
        }
    }
`

const listProducts = gql`
    query Products {
        products(first: 100) {
            edges {
                node {
                    id
                    title
                    tags
                    description(truncateAt: 100)
                    variants(first: 1) {
                        edges {
                            node {
                                id
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

const Index = ({ transactions }) => {
    const [searchValue, setSearchValue] = useState(null)
    const [transactionItems, setTransactionItems] = useState(transactions.listTransactions.items)
    const [nextPaginateToken, setNextPaginateToken] = useState(
        transactions.listTransactions.nextToken
    )
    const [previousPaginateTokens, setPreviousPaginateTokens] = useState([])
    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    const app = createApp({
        apiKey: '3b01063bac3031d13101100ef3e44fd5',
        shopOrigin: 'transactions-avanta.myshopify.com'
    })

    const redirect = Redirect.create(app)

    const paginateNext = async () => {
        setPreviousPaginateTokens([...previousPaginateTokens, nextPaginateToken])
        try {
            const data = await API.graphql(
                graphqlOperation(listTransactions, { limit: 5, nextToken: nextPaginateToken })
            )

            console.log('Data from pagination', data)
            setTransactionItems(data.data.listTransactions.items)
            setNextPaginateToken(data.data.listTransactions.nextToken)
        } catch (error) {
            console.log(error)
        }
    }

    const paginatePrevious = async () => {
        const previousToken =
            previousPaginateTokens[
                previousPaginateTokens.length === 1 ? 0 : previousPaginateTokens.length - 2
            ]
        setPreviousPaginateTokens([
            ...previousPaginateTokens.slice(0, previousPaginateTokens.length - 1)
        ])
        try {
            if (previousPaginateTokens.length === 1) {
                const data = await API.graphql(graphqlOperation(listTransactions, { limit: 5 }))
                setTransactionItems(data.data.listTransactions.items)
                setNextPaginateToken(data.data.listTransactions.nextToken)
            } else {
                const data = await API.graphql(
                    graphqlOperation(listTransactions, { limit: 5, nextToken: previousToken })
                )
                setTransactionItems(data.data.listTransactions.items)
                setNextPaginateToken(data.data.listTransactions.nextToken)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Page title="Transactions">
            <TextField
                label="Search Product"
                value={searchValue}
                onChange={handleSearchInput}
                prefix={<Icon source={SearchMajorMonotone} />}
                placeholder="Search by Customer phone number"
            />
            <Stack>
                <Stack.Item fill>
                    <Button
                        id="Accept-Payment"
                        onClick={() =>
                            redirect.dispatch(
                                Redirect.Action.ADMIN_PATH,
                                '/apps/3b01063bac3031d13101100ef3e44fd5/accept-payment'
                            )
                        }>
                        <Icon source={BalanceMajorMonotone} /> Accept Payment
                    </Button>
                </Stack.Item>
                <Stack.Item>
                    <Button
                        id="Create-Transaction"
                        primary
                        onClick={() =>
                            redirect.dispatch(Redirect.Action.REMOTE, {
                                url: 'https://dev.d3ivgpkzuz6hkr.amplifyapp.com',
                                newContext: true
                            })
                        }>
                        <Icon source={TransactionMajorMonotone} /> Create transaction
                    </Button>
                </Stack.Item>
            </Stack>
            {transactionItems && (
                <Card>
                    <DataTable
                        columnContentTypes={['text', 'text', 'text', 'text']}
                        headings={[
                            'Customer phone number',
                            'TotalPrice',
                            'TotalBonusAmount',
                            'Minus from Bonus Amount',
                            'CreatedAt'
                        ]}
                        rows={
                            transactionItems &&
                            transactionItems
                                .filter((transaction) => {
                                    if (searchValue == null) {
                                        return transaction
                                    } else if (
                                        transaction.customer[0].phone
                                            .toLowerCase()
                                            .includes(searchValue.toLowerCase())
                                    ) {
                                        return transaction
                                    }
                                })
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .map((transaction) => [
                                    <Button
                                        primary
                                        onClick={() =>
                                            redirect.dispatch(Redirect.Action.ADMIN_PATH, {
                                                path: `/customers/${transaction.customer[0].id}`,
                                                newContext: true
                                            })
                                        }>
                                        {transaction.customer[0].phone}
                                    </Button>,
                                    toCurrency(Number(transaction.totalPrice)),
                                    toCurrency(Number(transaction.totalBonusAmount)),
                                    transaction.note === null
                                        ? ''
                                        : toCurrency(extractNumbersFromString(transaction.note)),
                                    formatDate(transaction.createdAt)
                                ])
                        }
                    />
                    <Pagination
                        hasPrevious={previousPaginateTokens.length > 0}
                        onPrevious={paginatePrevious}
                        hasNext={nextPaginateToken}
                        onNext={paginateNext}
                    />
                </Card>
            )}
        </Page>
    )
}

export async function getStaticProps() {
    let result
    try {
        result = await API.graphql(graphqlOperation(listTransactions, { limit: 5 }))
    } catch (error) {
        console.log(error)
    }

    if (result.errors) {
        console.warn('Failed to fetch transactions.', result.errors)
        return { props: { transactions: [] } }
    }
    if (result.data !== null) {
        return { props: { transactions: result.data } }
    }
}

export default Index
