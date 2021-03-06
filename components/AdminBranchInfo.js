import React, { useState, useEffect, useCallback } from "react"
import { API, graphqlOperation } from "aws-amplify"
import { Button, Icon, Card, DataTable, TextField } from "@shopify/polaris"
import { SearchMajorMonotone } from "@shopify/polaris-icons"
import { toCurrency, formatDate } from "../utils/helper"
import config from "../aws-exports"
import { getBranchById } from "../graphql/queries"

API.configure(config)

const AdminBranchInfo = ({ branchId, setBranchId }) => {
  const [branchInfo, setBranchInfo] = useState("")
  const [searchValue, setSearchValue] = useState(null)

  const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

  const getBranch = async () => {
    try {
      const branch = await API.graphql(graphqlOperation(getBranchById, { id: branchId }))
      setBranchInfo(branch.data.getBranch)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBranch()
  }, [])

  return (
    <>
      {branchInfo && (
        <>
          <Button onClick={() => setBranchId(null)} primary>
            Go back
          </Button>
          <TextField
            label="Search Product"
            value={searchValue}
            onChange={handleSearchInput}
            prefix={<Icon source={SearchMajorMonotone} />}
            placeholder="Search by Customer phone number"
          />
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
        </>
      )}
    </>
  )
}

export default AdminBranchInfo
