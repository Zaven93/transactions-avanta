import React, { useEffect, useState } from "react"
import QRCode from "qrcode.react"
import { useBranchByAdmin } from "../core/hooks"
import { Auth } from "aws-amplify"

import PaymentRequest from "../components/PaymentRequest"

const AcceptPayment = () => {
  const [adminId, setAdminId] = useState("")
  const { data: branchData, refetch: getBranch } = useBranchByAdmin(adminId)

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()

      if (!user) {
        return
      }
      setAdminId(user.attributes.sub)
      console.log("Authenticated user Zaven jan", user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    getBranch()
  }, [adminId])

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <QRCode style={{ height: "200px", width: "200px" }} value="Hello Zaven jan" />
      </div>
      {branchData && <PaymentRequest branchId={branchData.data.branchByAdminId.items[0].id} />}
    </>
  )
}

export default AcceptPayment
