import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import createApp from '@shopify/app-bridge'
import { Redirect } from '@shopify/app-bridge/actions'
import gql from 'graphql-tag'
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
    BalanceMajorMonotone,
    LogOutMinor
} from '@shopify/polaris-icons'
import { toCurrency, formatDate, extractNumbersFromString } from '../utils/helper'
import config from '../aws-exports'
import Login from '../components/Login'
import BranchConsole from '../components/BranchConsole'
import PaymentRequest from '../components/PaymentRequest'

API.configure(config)

const branchByAdminId = gql`
    query branchByAdminId($adminId: ID!) {
        branchByAdminId(adminId: $adminId) {
            items {
                adminId
                branchName
                id
                transactions {
                    items {
                        branchId
                        createdAt
                        currency
                        id
                        note
                        customer {
                            email
                            firstName
                            id
                            lastName
                            phone
                        }
                        products {
                            bonusPercentage
                            id
                            image
                            priceAmount
                            priceCurrency
                            title
                        }
                        sortDate
                        totalBonusAmount
                        totalPrice
                        updatedAt
                    }
                }
                branchProducts {
                    items {
                        branchId
                        createdAt
                        id
                        productId
                        tags
                    }
                }
            }
        }
    }
`

const onCreateTransaction = gql`
    subscription onCreateTransaction {
        onCreateTransaction {
            id
        }
    }
`

const BranchData = ({ user, updateUser }) => {
    const [branchInfo, setBranchInfo] = useState('')
    const [searchValue, setSearchValue] = useState(null)
    const [newCreatedTransaction, setNewCreatedTransaction] = useState('')
    const [showPaymentRequest, setShowPaymentRequest] = useState(false)
    // const [transactionItems, setTransactionItems] = useState(transactions.listTransactions.items)
    // const [nextPaginateToken, setNextPaginateToken] = useState(
    //     transactions.listTransactions.nextToken
    // )
    // const [previousPaginateTokens, setPreviousPaginateTokens] = useState([])
    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    const router = useRouter()

    const app = createApp({
        apiKey: '3b01063bac3031d13101100ef3e44fd5',
        shopOrigin: 'transactions-avanta.myshopify.com'
    })

    const redirect = Redirect.create(app)

    // const paginateNext = async () => {
    //     setPreviousPaginateTokens([...previousPaginateTokens, nextPaginateToken])
    //     try {
    //         const data = await API.graphql(
    //             graphqlOperation(listTransactions, { limit: 5, nextToken: nextPaginateToken })
    //         )

    //         console.log('Data from pagination', data)
    //         setTransactionItems(data.data.listTransactions.items)
    //         setNextPaginateToken(data.data.listTransactions.nextToken)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const paginatePrevious = async () => {
    //     const previousToken =
    //         previousPaginateTokens[
    //             previousPaginateTokens.length === 1 ? 0 : previousPaginateTokens.length - 2
    //         ]
    //     setPreviousPaginateTokens([
    //         ...previousPaginateTokens.slice(0, previousPaginateTokens.length - 1)
    //     ])
    //     try {
    //         if (previousPaginateTokens.length === 1) {
    //             const data = await API.graphql(graphqlOperation(listTransactions, { limit: 5 }))
    //             setTransactionItems(data.data.listTransactions.items)
    //             setNextPaginateToken(data.data.listTransactions.nextToken)
    //         } else {
    //             const data = await API.graphql(
    //                 graphqlOperation(listTransactions, { limit: 5, nextToken: previousToken })
    //             )
    //             setTransactionItems(data.data.listTransactions.items)
    //             setNextPaginateToken(data.data.listTransactions.nextToken)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getBranch = async () => {
        try {
            const fetchBranch = await API.graphql(
                graphqlOperation(branchByAdminId, { adminId: user.attributes.sub })
            )
            setBranchInfo(fetchBranch.data.branchByAdminId.items[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBranch()
        API.graphql(graphqlOperation(onCreateTransaction)).subscribe({
            next: (createdTransaction) => setNewCreatedTransaction(createdTransaction)
        })
    }, [newCreatedTransaction])

    console.log('Branch data user', user)
    console.log('Branch info', branchInfo)

    return (
        <>
            {showPaymentRequest ? (
                <PaymentRequest
                    setShowPaymentRequest={setShowPaymentRequest}
                    branchId={branchInfo.id}
                />
            ) : (
                <Page title={branchInfo && branchInfo.branchName}>
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
                                    // redirect.dispatch(
                                    //     Redirect.Action.ADMIN_PATH,
                                    //     '/apps/3b01063bac3031d13101100ef3e44fd5/accept-payment'
                                    // )
                                    setShowPaymentRequest(true)
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
                                        // url: `https://dev.d3ivgpkzuz6hkr.amplifyapp.com?adminId=${user.attributes.sub}`,
                                        url: `http://localhost:3001/transactions/${user.attributes.sub}`,
                                        newContext: true
                                    })
                                }>
                                <Icon source={TransactionMajorMonotone} /> Create transaction
                            </Button>
                        </Stack.Item>
                        <Stack.Item>
                            <Button
                                primary
                                id="Logout"
                                onClick={() => {
                                    Auth.signOut()
                                    updateUser(null)
                                }}>
                                <Icon source={LogOutMinor} /> Logout
                            </Button>
                        </Stack.Item>
                    </Stack>
                    {branchInfo && (
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
                                    branchInfo &&
                                    branchInfo.transactions.items
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
                                        .sort(
                                            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                                        )
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
                                                : toCurrency(
                                                      extractNumbersFromString(transaction.note)
                                                  ),
                                            formatDate(transaction.createdAt)
                                        ])
                                }
                            />
                            {/* <Pagination
                        hasPrevious={previousPaginateTokens.length > 0}
                        onPrevious={paginatePrevious}
                        hasNext={nextPaginateToken}
                        onNext={paginateNext}
                    /> */}
                        </Card>
                    )}
                </Page>
            )}
        </>
    )
}

export default BranchData
