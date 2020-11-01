import React, { useState, useEffect } from 'react'
import AWS from 'aws-sdk'
import { API, graphqlOperation } from 'aws-amplify'
import { Button, Form } from '@shopify/polaris'
import { Table, Popup, Icon } from 'semantic-ui-react'
import { useListBranches, useDeleteBranch } from '../core/hooks'
import { formatDate } from '../utils/helper'
import config from '../aws-exports'
import BranchProducts from './BranchProducts'
import { listBranchs } from '../graphql/queries'
import { onCreateBranchSubscription, onDeleteBranchSubscription } from '../graphql/subscriptions'
import {
    removeBranch,
    deleteTransaction,
    deleteBranchProduct,
    deletePaymentRequest
} from '../graphql/mutation'

API.configure(config)

AWS.config.update({
    accessKeyId: 'AKIAIF6WKVKSOTQCUREQ',
    secretAccessKey: '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',
    region: 'us-east-1'
})

const cognito = new AWS.CognitoIdentityServiceProvider()

const BranchList = ({ setBranchId, branchId }) => {
    const [active, setActive] = useState(false)
    const [branches, setBranches] = useState('')
    const [branchName, setBranchName] = useState('')
    const [productBranchId, setProductBranchId] = useState('')
    const [newCreatedBranch, setNewCreatedBranch] = useState('')

    const { data: branchesData, refetch: fetchBranches } = useListBranches()
    const { deleteBranch, isLoading, error, data } = useDeleteBranch()

    const handleChange = () => {
        setActive(!active)
    }

    // const deleteBranch = async (id) => {
    //     const branchToDelete = branches.listBranchs.items.filter((item) => item.id === id)[0]

    //     const transactionsToDelete = branchToDelete.transactions.items
    //         ? branchToDelete.transactions.items.map((transaction) => transaction.id)
    //         : ''

    //     const productsToDelete = branchToDelete.branchProducts.items
    //         ? branchToDelete.branchProducts.items.map((product) => product.id)
    //         : ''

    //     const paymentRequestToDelete = branchToDelete.branchPaymentRequests.items
    //         ? branchToDelete.branchPaymentRequests.items.map((paymentRequest) => paymentRequest.id)
    //         : ''

    //     try {
    //         const deletedBranch = await API.graphql(
    //             graphqlOperation(removeBranch, { input: { id } })
    //         )

    //         await Promise.all(
    //             transactionsToDelete.map((transactionId) => {
    //                 API.graphql(
    //                     graphqlOperation(deleteTransaction, { input: { id: transactionId } })
    //                 )
    //             })
    //         ).catch((err) => console.log(err))

    //         await Promise.all(
    //             productsToDelete.map((productId) => {
    //                 API.graphql(graphqlOperation(deleteBranchProduct, { input: { id: productId } }))
    //             })
    //         ).catch((err) => console.log(err))

    //         await Promise.all(
    //             paymentRequestToDelete.map((paymentId) => {
    //                 API.graphql(
    //                     graphqlOperation(deletePaymentRequest, { input: { id: paymentId } })
    //                 )
    //             })
    //         )
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const deleteUserFromCognito = async (username) => {
    //     try {
    //         await cognito
    //             .adminDeleteUser({
    //                 UserPoolId: 'us-east-1_IfrnnzGFR',
    //                 Username: username
    //             })
    //             .promise()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        fetchBranches()

        const createListener = API.graphql(graphqlOperation(onCreateBranchSubscription)).subscribe({
            next: (createdBranch) => {
                setNewCreatedBranch(createdBranch)
            }
        })

        const deleteListener = API.graphql(graphqlOperation(onDeleteBranchSubscription)).subscribe({
            next: (deletedBranch) => {
                setNewCreatedBranch(deletedBranch)
            }
        })

        return () => {
            createListener.unsubscribe()
            deleteListener.unsubscribe()
        }
    }, [newCreatedBranch])

    useEffect(() => {
        setBranches(branchesData && branchesData.data)
    }, [branchesData])

    return (
        <>
            <Table selectable celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Branch Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Created At</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {branches &&
                        branches.listBranchs.items.map((item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell>
                                    <Button
                                        primary
                                        onClick={() => {
                                            setBranchId(item.id)
                                        }}>
                                        <Icon name="code branch" /> {item.branchName}
                                    </Button>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    {formatDate(item.createdAt)}
                                </Table.Cell>
                                <Table.Cell textAlign="center" className="branch-actions">
                                    <Popup
                                        content="Edit branch"
                                        trigger={
                                            <Icon
                                                onClick={() => {
                                                    setProductBranchId(item.id)
                                                    setBranchName(item.branchName)
                                                    handleChange()
                                                }}
                                                className="edit-branch"
                                                name="edit outline"
                                            />
                                        }
                                    />
                                    <Popup
                                        content="Delete Branch"
                                        trigger={
                                            <Icon
                                                className="remove-branch"
                                                name="trash alternate"
                                                onClick={() => {
                                                    deleteBranch({
                                                        branches,
                                                        username: item.branchUsername,
                                                        id: item.id
                                                    })
                                                    // deleteBranch(item.id)
                                                    // deleteUserFromCognito(item.branchUsername)
                                                }}
                                            />
                                        }
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table>
            <BranchProducts
                branchName={branchName}
                branchId={productBranchId}
                active={active}
                handleChange={handleChange}
            />
        </>
    )
}

export default BranchList
