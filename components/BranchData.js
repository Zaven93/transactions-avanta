import React, { useState, useCallback, useEffect } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { Redirect } from '@shopify/app-bridge/actions'
import createApp from '@shopify/app-bridge'
import {
    Card,
    DataTable,
    Button,
    Page,
    TextField,
    Icon,
    Stack,
    Modal,
    DatePicker,
    Link,
    Badge
} from '@shopify/polaris'
import {
    SearchMajorMonotone,
    TransactionMajorMonotone,
    BalanceMajorMonotone,
    LogOutMinor,
    CalendarMinor,
    BarcodeMajorMonotone
} from '@shopify/polaris-icons'
import QRCode from 'qrcode.react'
import { useBranchByAdmin } from '../core/hooks'
import { toCurrency, formatDate, extractNumbersFromString } from '../utils/helper'
import PaymentRequest from './PaymentRequest'
import CreateOrder from './CreateOrder'
import { branchByAdminId } from '../graphql/queries'
import { onCreateTransaction, onDeleteTransaction } from '../graphql/subscriptions'

const BranchData = ({ user, updateUser }) => {
    const [branchInfo, setBranchInfo] = useState('')
    const [searchValue, setSearchValue] = useState(null)
    const [newCreatedTransaction, setNewCreatedTransaction] = useState('')
    const [showPaymentRequest, setShowPaymentRequest] = useState(false)
    const [showCreateOrder, setShowCreateOrder] = useState(false)
    const [{ month, year }, setDate] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })
    const [selectedDates, setSelectedDates] = useState({
        start: new Date(null),
        end: new Date(null)
    })

    const [showDatepicker, setShowDatepicker] = useState(false)

    const { data: branchData, refetch: getBranch } = useBranchByAdmin(user.attributes.sub)

    const handleSearchInput = (e) => setSearchValue(e.target.value)

    const handleMonthChange = useCallback((month, year) => setDate({ month, year }), [])

    const downloadQR = () => {
        const canvas = document.getElementById('qr-code')
        const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        let downloadLink = document.createElement('a')
        downloadLink.href = pngUrl
        downloadLink.download = 'qr-code.png'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    const app = createApp({
        apiKey: 'cb7879ce44f538b136e4da86bc6f612c',
        shopOrigin: 'avanta-clinics.myshopify.com'
    })

    const redirect = Redirect.create(app)

    useEffect(() => {
        const createListener = API.graphql(graphqlOperation(onCreateTransaction)).subscribe({
            next: (createdTransaction) => setNewCreatedTransaction(createdTransaction)
        })

        const deleteListener = API.graphql(graphqlOperation(onDeleteTransaction)).subscribe({
            next: (deletedTransaction) => setNewCreatedTransaction(deletedTransaction)
        })

        return () => {
            createListener.unsubscribe()
            deleteListener.unsubscribe()
        }
    }, [newCreatedTransaction])

    useEffect(() => {
        getBranch()
    }, [user, newCreatedTransaction])

    useEffect(() => {
        setBranchInfo(branchData && branchData.data.branchByAdminId.items[0])
    }, [branchData])

    return (
        <>
            {showCreateOrder ? (
                <>
                    <CreateOrder
                        branchData={branchData}
                        user={user}
                        branchId={branchInfo ? branchInfo.id : ''}
                        setShowCreateOrder={setShowCreateOrder}
                    />
                </>
            ) : (
                <Page title={branchInfo && branchInfo.branchName}>
                    <div className="buttons-stack">
                        <Stack>
                            <Stack.Item fill>
                                <Button
                                    id="Accept-Payment"
                                    onClick={() => setShowCreateOrder(true)}>
                                    <Icon source={BalanceMajorMonotone} /> Create Order
                                </Button>
                            </Stack.Item>
                            <Stack.Item>
                                <Link onClick={downloadQR}>Download QR code</Link>
                            </Stack.Item>
                            <Stack.Item>
                                <Button
                                    id="Logout"
                                    onClick={() => {
                                        Auth.signOut()
                                        updateUser(null)
                                    }}>
                                    <Icon source={LogOutMinor} /> Logout
                                </Button>
                            </Stack.Item>
                        </Stack>
                    </div>
                    <div className="buttons-stack">
                        <Stack>
                            <Stack.Item fill>
                                <div className="search-order-products-input">
                                    <Icon source={SearchMajorMonotone} />
                                    <input
                                        value={searchValue}
                                        placeholder="Search transactions by phone number"
                                        onChange={handleSearchInput}
                                    />
                                </div>
                            </Stack.Item>
                            <Stack.Item>
                                <Button id="Logout" onClick={() => setShowDatepicker(true)}>
                                    <Icon source={CalendarMinor} /> Filter by Date
                                </Button>
                            </Stack.Item>
                        </Stack>
                    </div>
                    {branchInfo && (
                        <Card>
                            <DataTable
                                verticalAlign="middle"
                                columnContentTypes={['text', 'text', 'text', 'text', 'text']}
                                headings={[
                                    'Customer phone number',
                                    'Total Price',
                                    'Payed with the bonus',
                                    'Created At',
                                    'Creation Time'
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
                                        .sort((a, b) =>
                                            a.createdAt.match(/\d\d:\d\d:\d\d/)[0] >
                                            b.createdAt.match(/\d\d:\d\d:\d\d/)[0]
                                                ? -1
                                                : a.createdAt.match(/\d\d:\d\d:\d\d/)[0] <
                                                  b.createdAt.match(/\d\d:\d\d:\d\d/)[0]
                                                ? 1
                                                : 0
                                        )
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
                                            formatDate(transaction.createdAt),
                                            transaction.createdAt.match(/\d\d:\d\d:\d\d/)[0]
                                        ])
                                }
                            />
                        </Card>
                    )}
                    <Modal
                        title="Filter payment requests by date"
                        open={showDatepicker}
                        onClose={() => setShowDatepicker(false)}>
                        <Modal.Section>
                            <DatePicker
                                month={month}
                                year={year}
                                onChange={setSelectedDates}
                                onMonthChange={handleMonthChange}
                                selected={selectedDates}
                                multiMonth
                                allowRange
                            />
                        </Modal.Section>
                    </Modal>
                    <QRCode
                        style={{ display: 'none' }}
                        id="qr-code"
                        value={branchInfo ? branchInfo.id : ''}
                        size={500}
                        level={'H'}
                        includeMargin={true}
                    />
                </Page>
            )}
        </>
    )
}

export default BranchData
