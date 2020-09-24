import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import gql from 'graphql-tag'
import { print } from 'graphql'
import { API, graphqlOperation } from 'aws-amplify'
import {
    Page,
    Badge,
    Avatar,
    TextStyle,
    Card,
    TextContainer,
    Modal,
    Checkbox,
    Thumbnail,
    Toast,
    Frame,
    Button,
    Tabs
} from '@shopify/polaris'
import { CustomersMajorMonotone } from '@shopify/polaris-icons'
import { Table, Icon, Popup, Header } from 'semantic-ui-react'
import { toCurrency, formatDate } from '../utils/helper'
import config from '../aws-exports'
import ProductList from '../components/ProductsList'
import AcceptedPaymentRequest from '../components/AcceptedPaymentRequest'
import PendingPaymentRequest from '../components/PendingPaymentRequest'
import DeclinedPaymentRequest from '../components/DeclinedPaymentRequest'

API.configure(config)

const listPaymentRequest = gql`
    query listPaymentRequest {
        listPaymentRequests {
            items {
                bonusAmount
                createdAt
                customerId
                id
                orderId
                status
                updatedAt
            }
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

const createDraftOrder = gql`
    mutation CreateOrder($input: DraftOrderInput!) {
        draftOrderCreate(input: $input) {
            draftOrder {
                id
                customer {
                    id
                }
                email
                lineItems(first: 10) {
                    edges {
                        node {
                            title
                            quantity
                            originalUnitPrice
                            variant {
                                id
                                price
                                title
                                product {
                                    tags
                                    title
                                    images(first: 5) {
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
                }
            }
        }
    }
`

const completeOrder = gql`
    mutation CompleteOrder($id: ID!) {
        draftOrderComplete(id: $id, paymentPending: true) {
            draftOrder {
                customer {
                    id
                }
                email
                name
            }
        }
    }
`

const onCreatePaymentSubscription = gql`
    subscription onCreatePaymentSubscription {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            orderId
            updatedAt
        }
    }
`

const onUpdatePaymentSubscription = gql`
    subscription onUpdatePaymentRequest {
        onUpdatePaymentRequest {
            id
            status
        }
    }
`

const onDeletePaymentSubscription = gql`
    subscription onDeletePaymentRequest {
        onDeletePaymentRequest {
            id
            status
        }
    }
`

const paymentSubscription = gql`
    subscription paymentRequest {
        onCreatePaymentRequest {
            bonusAmount
            createdAt
            customerId
            id
            orderId
            status
            updatedAt
        }
    }
`

const AcceptPayment = () => {
    // const [paymentRequestItems, setPaymentRequestItems] = useState(
    //     paymentRequests.listPaymentRequests.items
    // )
    const [openPicker, setOpenPicker] = useState(false)
    const [rowId, setRowId] = useState([])
    const [searchValue, setSearchValue] = useState(null)
    const [activeToast, setActiveToast] = useState(false)
    const [selected, setSelected] = useState(0)
    const [createUpdatePaymentSubscription, setCreateUpdatePaymentSubscription] = useState('')

    const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), [])

    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    useEffect(() => {
        const listener = API.graphql(graphqlOperation(paymentSubscription)).subscribe({
            next: (paymentResponse) => {
                setCreateUpdatePaymentSubscription(paymentResponse)
            }
        })

        const onUpdatePayment = API.graphql(
            graphqlOperation(onUpdatePaymentSubscription)
        ).subscribe({
            next: (onUpdatePaymentResponse) => {
                setCreateUpdatePaymentSubscription(onUpdatePaymentResponse)
            }
        })

        return () => {
            listener.unsubscribe()
            onUpdatePayment.unsubscribe()
        }
    }, [])

    const tabs = [
        {
            id: 'pending-payments',
            content: 'Pending Payment Requests',
            accessibilityLabel: 'Pending Requests',
            panelID: 'pending-payments-content'
        },
        {
            id: 'accepted-payments',
            content: 'Accepted Payment Requests',
            accessibilityLabel: 'Accepted Request',
            panelID: 'accepted-payments-content'
        },
        {
            id: 'declined-payments',
            content: 'Declined Payment Requests',
            accessibilityLabel: 'Declined Requests',
            panelID: 'declined-payments-content'
        }
    ]

    const toastMarkup = activeToast ? (
        <Toast
            content="Order has been successfully created"
            onDismiss={() => setActiveToast(false)}
        />
    ) : null

    const renderPaymentRequest = (selected) => {
        switch (selected) {
            case 0:
                return (
                    <PendingPaymentRequest
                        createUpdatePaymentSubscription={createUpdatePaymentSubscription}
                    />
                )
            case 1:
                return <AcceptedPaymentRequest />
            case 2:
                return <DeclinedPaymentRequest />
            default:
                return
        }
    }

    return (
        <Frame>
            <Page title="Payment Request">
                <Card>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                        <Card.Section title={tabs[selected].content}>
                            {renderPaymentRequest(selected)}
                        </Card.Section>
                    </Tabs>
                </Card>
                {toastMarkup}
            </Page>
        </Frame>
    )
}

// export async function getStaticProps() {
//     let result
//     try {
//         result = await API.graphql(graphqlOperation(listPaymentRequest))
//     } catch (error) {
//         console.log(error)
//     }

//     if (result.errors) {
//         console.warn('Failed to fetch payment requests.', result.errors)
//         return { props: { paymentRequests: [] } }
//     }
//     if (result.data !== null) {
//         return {
//             props: { paymentRequests: result.data }
//         }
//     }
// }

export default AcceptPayment
