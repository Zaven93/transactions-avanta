import React, { useState, useEffect, useCallback } from "react"
import { Table } from "semantic-ui-react"
import { API, graphqlOperation } from "aws-amplify"
import { Badge, Button } from "@shopify/polaris"
import { useFetchPaymentRequest } from "../core/hooks"
import { toCurrency, formatDate } from "../utils/helper"
import { listPaymentRequest } from "../graphql/queries"

const DeclinedPaymentRequest = ({ branchId }) => {
  const [nextPaginateToken, setNextPaginateToken] = useState("")
  const [paymentRequestItems, setPaymentRequestItems] = useState([])

  const { data: paymentRequests, refetch: getPaymentRequests } = useFetchPaymentRequest(
    branchId,
    "DECLINED",
    20
  )

  useEffect(() => {
    getPaymentRequests()
  }, [branchId])

  useEffect(() => {
    setNextPaginateToken(paymentRequests && paymentRequests.data.listPaymentRequests.nextToken)
    setPaymentRequestItems(paymentRequests && paymentRequests.data.listPaymentRequests.items)
  }, [paymentRequests])

  const loadMore = async () => {
    try {
      const res = await API.graphql(
        graphqlOperation(listPaymentRequest, {
          limit: 20,
          nextToken: nextPaginateToken,
          branchId,
          status: "DECLINED",
        })
      )
      setNextPaginateToken(res.data.listPaymentRequests.nextToken)
      setPaymentRequestItems([...paymentRequestItems, ...res.data.listPaymentRequests.items])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Customer Id</Table.HeaderCell>
            <Table.HeaderCell>Bonus Amount</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
            <Table.HeaderCell>Updated At</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paymentRequestItems &&
            paymentRequestItems
              .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
              .map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <Badge size="small">{item.customerId}</Badge>
                  </Table.Cell>
                  <Table.Cell>{toCurrency(item.bonusAmount)}</Table.Cell>
                  <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
                  <Table.Cell>{formatDate(item.updatedAt)}</Table.Cell>
                  <Table.Cell>
                    <Badge size="small" progress="incomplete" status="critical">
                      {item.status}
                    </Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
      <Button disabled={!nextPaginateToken} primary onClick={loadMore}>
        Load more
      </Button>
    </>
  )
}

export default DeclinedPaymentRequest
