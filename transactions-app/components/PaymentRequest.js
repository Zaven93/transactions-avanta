import React, { useState, useCallback, useEffect } from "react"
import { API, graphqlOperation } from "aws-amplify"
import { Page, Card, Toast, Frame, Tabs, Button } from "@shopify/polaris"
import config from "../aws-exports"
import AcceptedPaymentRequest from "./AcceptedPaymentRequest"
import PendingPaymentRequest from "./PendingPaymentRequest"
import DeclinedPaymentRequest from "./DeclinedPaymentRequest"
import { onUpdatePaymentSubscription, paymentSubscription } from "../graphql/subscriptions"

API.configure(config)

const AcceptPayment = ({ branchId, setShowPaymentRequest }) => {
  const [activeToast, setActiveToast] = useState(false)
  const [selected, setSelected] = useState(0)
  const [createUpdatePaymentSubscription, setCreateUpdatePaymentSubscription] = useState("")

  const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), [])

  useEffect(() => {
    const listener = API.graphql(graphqlOperation(paymentSubscription)).subscribe({
      next: (paymentResponse) => {
        setCreateUpdatePaymentSubscription(paymentResponse)
      },
    })

    const onUpdatePayment = API.graphql(graphqlOperation(onUpdatePaymentSubscription)).subscribe({
      next: (onUpdatePaymentResponse) => {
        setCreateUpdatePaymentSubscription(onUpdatePaymentResponse)
      },
    })

    return () => {
      listener.unsubscribe()
      onUpdatePayment.unsubscribe()
    }
  }, [])

  const tabs = [
    {
      id: "pending-payments",
      content: "Pending Payment Requests",
      accessibilityLabel: "Pending Requests",
      panelID: "pending-payments-content",
    },
    {
      id: "accepted-payments",
      content: "Accepted Payment Requests",
      accessibilityLabel: "Accepted Request",
      panelID: "accepted-payments-content",
    },
    {
      id: "declined-payments",
      content: "Declined Payment Requests",
      accessibilityLabel: "Declined Requests",
      panelID: "declined-payments-content",
    },
  ]

  const toastMarkup = activeToast ? (
    <Toast content="Order has been successfully created" onDismiss={() => setActiveToast(false)} />
  ) : null

  const renderPaymentRequest = (selected) => {
    switch (selected) {
      case 0:
        return (
          <PendingPaymentRequest
            branchId={branchId}
            createUpdatePaymentSubscription={createUpdatePaymentSubscription}
          />
        )
      case 1:
        return <AcceptedPaymentRequest branchId={branchId} />
      case 2:
        return <DeclinedPaymentRequest branchId={branchId} />
      default:
        return
    }
  }

  return (
    <Frame>
      <Page title="Payment Request">
        <Button onClick={() => setShowPaymentRequest(false)}>Go back</Button>
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

export default AcceptPayment
