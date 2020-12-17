import React, { useState, useEffect, useCallback } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { Redirect } from '@shopify/app-bridge/actions'
import createApp from '@shopify/app-bridge'
import { Button, Icon, Card, DataTable, TextField, Page, Link } from '@shopify/polaris'
import { SearchMajorMonotone } from '@shopify/polaris-icons'
import { useBranchEntity } from '../core/hooks'
import { toCurrency, formatDate, extractNumbersFromString } from '../utils/helper'
import { getBranchById } from '../graphql/queries'

const AdminBranchInfo = ({ branchId, setBranchId }) => {
    const [branchInfo, setBranchInfo] = useState('')
    const [searchValue, setSearchValue] = useState(null)

    const { data: branchData, refetch: fetchBranch } = useBranchEntity(branchId)

    const handleSearchInput = useCallback((newValue) => setSearchValue(newValue), [])

    const app = createApp({
        apiKey: 'cb7879ce44f538b136e4da86bc6f612c',
        shopOrigin: 'avanta-clinics.myshopify.com'
    })

    const redirect = Redirect.create(app)

    const getBranch = useCallback(() => {
        fetchBranch()
    }, [branchData])

    useEffect(() => {
        getBranch()
    }, [getBranch])

    useEffect(() => {
        setBranchInfo(branchData && branchData.data.getBranch)
    }, [branchData])

    return (
        <>
            {branchInfo && (
                <Page
                    fullWidth
                    title="Branch transactions"
                    primaryAction={{ content: 'Go back', onAction: () => setBranchId(null) }}>
                    <TextField
                        value={searchValue}
                        onChange={handleSearchInput}
                        prefix={<Icon source={SearchMajorMonotone} />}
                        placeholder="Search by Customer phone number"
                    />
                    <Card>
                        <DataTable
                            columnContentTypes={['text', 'text', 'text', 'text']}
                            headings={[
                                'Customer phone number',
                                'TotalPrice',
                                'Payed with bonus',
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
                                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                    .map((transaction) => [
                                        <Link
                                            monochrome
                                            onClick={() =>
                                                redirect.dispatch(Redirect.Action.ADMIN_PATH, {
                                                    path: `/customers/${transaction.customer[0].id}`,
                                                    newContext: true
                                                })
                                            }>
                                            {transaction.customer[0].firstName +
                                                ' ' +
                                                transaction.customer[0].lastName}
                                        </Link>,
                                        toCurrency(Number(transaction.totalPrice)),
                                        toCurrency(Number(transaction.totalBonusAmount)),
                                        formatDate(transaction.createdAt)
                                    ])
                            }
                        />
                    </Card>
                </Page>
            )}
        </>
    )
}

export default AdminBranchInfo
