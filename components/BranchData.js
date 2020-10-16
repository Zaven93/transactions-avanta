import React, { useState, useCallback, useEffect } from "react"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { Redirect } from "@shopify/app-bridge/actions"
import createApp from "@shopify/app-bridge"
import { Card, DataTable, Button, Page, TextField, Icon, Stack } from "@shopify/polaris"
import {
  SearchMajorMonotone,
  TransactionMajorMonotone,
  BalanceMajorMonotone,
  LogOutMinor,
} from "@shopify/polaris-icons"
import { toCurrency, formatDate, extractNumbersFromString } from "../utils/helper"
import config from "../aws-exports"
import PaymentRequest from "../components/PaymentRequest"
import { branchByAdminId } from "../graphql/queries"
import { onCreateTransaction, onDeleteTransaction } from "../graphql/subscriptions"

API.configure(config)

const BranchData = ({ user, updateUser }) => {
  const [branchInfo, setBranchInfo] = useState("")
  const [searchValue, setSearchValue] = useState(null)
  const [newCreatedTransaction, setNewCreatedTransaction] = useState("")
  const [showPaymentRequest, setShowPaymentRequest] = useState(false)

  const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

  const app = createApp({
    apiKey: "3b01063bac3031d13101100ef3e44fd5",
    shopOrigin: "transactions-avanta.myshopify.com",
  })

  const redirect = Redirect.create(app)

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

    const createListener = API.graphql(graphqlOperation(onCreateTransaction)).subscribe({
      next: (createdTransaction) => setNewCreatedTransaction(createdTransaction),
    })

    const deleteListener = API.graphql(graphqlOperation(onDeleteTransaction)).subscribe({
      next: (deletedTransaction) => setNewCreatedTransaction(deletedTransaction),
    })

    return () => {
      createListener.unsubscribe()
      deleteListener.unsubscribe()
    }
  }, [newCreatedTransaction])

  return (
    <>
      {showPaymentRequest ? (
        <PaymentRequest
          setShowPaymentRequest={setShowPaymentRequest}
          branchId={branchInfo ? branchInfo.id : ""}
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
              <Button id="Accept-Payment" onClick={() => setShowPaymentRequest(true)}>
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
                    newContext: true,
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
                columnContentTypes={["text", "text", "text", "text"]}
                headings={[
                  "Customer phone number",
                  "TotalPrice",
                  "TotalBonusAmount",
                  "Minus from Bonus Amount",
                  "CreatedAt",
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
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map((transaction) => [
                      <Button
                        primary
                        onClick={() =>
                          redirect.dispatch(Redirect.Action.ADMIN_PATH, {
                            path: `/customers/${transaction.customer[0].id}`,
                            newContext: true,
                          })
                        }>
                        {transaction.customer[0].phone}
                      </Button>,
                      toCurrency(Number(transaction.totalPrice)),
                      toCurrency(Number(transaction.totalBonusAmount)),
                      transaction.note === null
                        ? ""
                        : toCurrency(extractNumbersFromString(transaction.note)),
                      formatDate(transaction.createdAt),
                    ])
                }
              />
            </Card>
          )}
        </Page>
      )}
    </>
  )
}

export default BranchData
