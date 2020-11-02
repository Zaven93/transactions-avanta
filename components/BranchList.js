import React, { useState, useEffect } from "react"
import AWS from "aws-sdk"
import { API, graphqlOperation } from "aws-amplify"
import { Button, Form } from "@shopify/polaris"
import { Table, Popup, Icon } from "semantic-ui-react"
import { useListBranches, useDeleteBranch } from "../core/hooks"
import { formatDate } from "../utils/helper"
import config from "../aws-exports"
import BranchProducts from "./BranchProducts"
import { listBranchs } from "../graphql/queries"
import { onCreateBranchSubscription, onDeleteBranchSubscription } from "../graphql/subscriptions"
import {
  removeBranch,
  deleteTransaction,
  deleteBranchProduct,
  deletePaymentRequest,
} from "../graphql/mutation"

const BranchList = ({ setBranchId, branchId }) => {
  const [active, setActive] = useState(false)
  const [branches, setBranches] = useState("")
  const [branchName, setBranchName] = useState("")
  const [productBranchId, setProductBranchId] = useState("")
  const [newCreatedBranch, setNewCreatedBranch] = useState("")

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
      },
    })

    const deleteListener = API.graphql(graphqlOperation(onDeleteBranchSubscription)).subscribe({
      next: (deletedBranch) => {
        setNewCreatedBranch(deletedBranch)
      },
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
                <Table.Cell textAlign="center">{formatDate(item.createdAt)}</Table.Cell>
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
                            id: item.id,
                          })
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
