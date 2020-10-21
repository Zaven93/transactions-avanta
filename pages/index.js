import React, { useState, useCallback, useEffect } from "react"
import { Auth } from "aws-amplify"
import config from "../aws-exports"
import Login from "../components/Login"
import BranchConsole from "../components/BranchConsole"
import BranchData from "../components/BranchData"

const Index = () => {
  const [user, updateUser] = useState(null)

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()

      if (!user) {
        return
      }
      updateUser(user)
    } catch (error) {
      console.log(error)
    }
  }

  const ref = React.createRef()

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <>
      {user && user.username !== "superadmin" && <BranchData updateUser={updateUser} user={user} />}
      {!user && <Login ref={ref} setUser={(fetchedUser) => updateUser(fetchedUser)} />}
      {user && user.username === "superadmin" && <BranchConsole updateUser={updateUser} />}
    </>
  )
}

export default Index
