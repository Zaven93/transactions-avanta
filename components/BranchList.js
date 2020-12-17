import React, { useState, useEffect } from 'react'
import AWS from 'aws-sdk'
import { API, graphqlOperation } from 'aws-amplify'
import { Button, Form, Link } from '@shopify/polaris'
import { Table, Popup, Icon } from 'semantic-ui-react'
import { useListBranches, useDeleteBranch } from '../core/hooks'
import { formatDate } from '../utils/helper'
import config from '../aws-exports'
import BranchProducts from './BranchProducts'
import { listBranchs } from '../graphql/queries'
import {
    onCreateBranchSubscription,
    onDeleteBranchSubscription,
    onCreateBranchProduct
} from '../graphql/subscriptions'
import {
    removeBranch,
    deleteTransaction,
    deleteBranchProduct,
    deletePaymentRequest
} from '../graphql/mutation'

const BranchList = ({ setBranchId, branchId }) => {
    const [active, setActive] = useState(false)
    const [branches, setBranches] = useState('')
    const [branchName, setBranchName] = useState('')
    const [productBranchId, setProductBranchId] = useState('')
    const [newCreatedBranch, setNewCreatedBranch] = useState('')
    const [createdBranchProduct, setCreatedBranchProduct] = useState('')

    const { data: branchesData, refetch: fetchBranches } = useListBranches()
    const { deleteBranch, isLoading, error, data } = useDeleteBranch()

    const handleChange = () => {
        setActive(!active)
    }

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

        const createBranchProductListener = API.graphql(
            graphqlOperation(onCreateBranchProduct)
        ).subscribe({
            next: (created) => setCreatedBranchProduct(created)
        })

        return () => {
            createListener.unsubscribe()
            deleteListener.unsubscribe()
            createBranchProductListener.unsubscribe()
        }
    }, [newCreatedBranch, createdBranchProduct])

    useEffect(() => {
        setBranches(branchesData && branchesData.data)
    }, [branchesData])

    return (
        <>
            <Table selectable celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Branch Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Created At</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Creation time</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {branches &&
                        branches.listBranchs.items
                            .sort((a, b) =>
                                a.createdAt.match(/\d\d:\d\d:\d\d/)[0] >
                                b.createdAt.match(/\d\d:\d\d:\d\d/)[0]
                                    ? -1
                                    : a.createdAt.match(/\d\d:\d\d:\d\d/)[0] <
                                      b.createdAt.match(/\d\d:\d\d:\d\d/)[0]
                                    ? 1
                                    : 0
                            )
                            .map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell textAlign="center">
                                        <Link
                                            monochrome
                                            onClick={() => {
                                                setBranchId(item.id)
                                            }}>
                                            {item.branchName}
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        {formatDate(item.createdAt)}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        {item.createdAt.match(/\d\d:\d\d:\d\d/)[0]}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center" className="branch-actions">
                                        <Button
                                            onClick={() => {
                                                setProductBranchId(item.id)
                                                setBranchName(item.branchName)
                                                handleChange()
                                            }}>
                                            <Icon className="edit-branch" name="edit outline" />{' '}
                                            Edit
                                        </Button>
                                        <Button
                                            id="remove-branch-button"
                                            onClick={() => {
                                                deleteBranch({
                                                    branches,
                                                    username: item.branchUsername,
                                                    id: item.id
                                                })
                                            }}>
                                            <Icon
                                                className="remove-branch"
                                                name="trash alternate"
                                            />
                                        </Button>
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
