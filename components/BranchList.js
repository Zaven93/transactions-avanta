import React, { useState, useEffect, useCallback } from 'react'
import AWS from 'aws-sdk'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import createApp from '@shopify/app-bridge'
import { Redirect } from '@shopify/app-bridge/actions'
import gql from 'graphql-tag'
import { v4 as uuidv4 } from 'uuid'
import { Page, Button, Modal, Form, FormLayout, TextField, Badge } from '@shopify/polaris'
import { Table, Popup, Header, Icon } from 'semantic-ui-react'
import ProductList from './ProductsList'
import { formatDate } from '../utils/helper'
import config from '../aws-exports'
import BranchProducts from './BranchProducts'
import AdminBranchInfo from '../components/AdminBranchInfo'

API.configure(config)

AWS.config.update({
    accessKeyId: 'AKIAI53OMMWOAP5X3K5Q',
    secretAccessKey: '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',
    region: 'us-east-1'
})

const cognito = new AWS.CognitoIdentityServiceProvider()

const listBranchs = gql`
    query listBranchs {
        listBranchs {
            items {
                adminId
                branchName
                branchUsername
                createdAt
                id
                branchProducts {
                    items {
                        branchId
                        createdAt
                        id
                        productId
                        tags
                        updatedAt
                    }
                }
            }
        }
    }
`
const onCreateBranchSubscription = gql`
    subscription onCreateBranch {
        onCreateBranch {
            adminId
            branchName
            id
            createdAt
        }
    }
`

const onDeleteBranchSubscription = gql`
    subscription onDeleteBranch {
        onDeleteBranch {
            id
        }
    }
`

const removeBranch = gql`
    mutation deleteBranch($input: DeleteBranchInput!) {
        deleteBranch(input: $input) {
            id
        }
    }
`

const BranchList = ({ setBranchId, branchId }) => {
    const [active, setActive] = useState(false)
    const [branches, setBranches] = useState('')
    const [branchName, setBranchName] = useState('')
    const [productBranchId, setProductBranchId] = useState('')
    const [newCreatedBranch, setNewCreatedBranch] = useState('')

    const app = createApp({
        apiKey: '3b01063bac3031d13101100ef3e44fd5',
        shopOrigin: 'transactions-avanta.myshopify.com'
    })

    const redirect = Redirect.create(app)

    const handleChange = () => {
        setActive(!active)
    }

    const fetchBranches = async () => {
        try {
            const getBranches = await API.graphql(graphqlOperation(listBranchs))
            setBranches(getBranches.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteBranch = async (id) => {
        try {
            const deletedBranch = await API.graphql(
                graphqlOperation(removeBranch, { input: { id } })
            )
            console.log('Deleted branch', deletedBranch)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUserFromCognito = async (username) => {
        try {
            await cognito
                .adminDeleteUser({
                    UserPoolId: 'us-east-1_IfrnnzGFR',
                    Username: username
                })
                .promise()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBranches()
        API.graphql(graphqlOperation(onCreateBranchSubscription)).subscribe({
            next: (createdBranch) => {
                setNewCreatedBranch(createdBranch)
            }
        })
        API.graphql(graphqlOperation(onDeleteBranchSubscription)).subscribe({
            next: (deletedBranch) => {
                setNewCreatedBranch(deletedBranch)
            }
        })
    }, [newCreatedBranch])

    console.log('Branches from Branch list', branches)

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
                                    {/* <Badge size="medium" status="info">
                                        {item.branchName}
                                    </Badge> */}
                                    <Button
                                        primary
                                        onClick={() => {
                                            setBranchId(item.id)
                                            // redirect.dispatch(
                                            //     Redirect.Action.ADMIN_PATH,
                                            //     `/apps/3b01063bac3031d13101100ef3e44fd5/branch/${item.id}`
                                            // )
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
                                                    deleteBranch(item.id)
                                                    deleteUserFromCognito(item.branchUsername)
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
