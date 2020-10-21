import { useState, useCallback } from "react"
import { Card, Button, TextField, Form, FormLayout } from "@shopify/polaris"
import Amplify, { Auth } from "aws-amplify"
import config from "../aws-exports"

Amplify.configure(config)

const Profile = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onChangeUsername = useCallback((newValue) => {
    setUsername(newValue)
  }, [])

  const onChangePassword = useCallback((newValue) => {
    setPassword(newValue)
  }, [])

  const signIn = async (e) => {
    e.preventDefault()
    const signedInUser = await Auth.signIn(username, password)
    setUser(signedInUser)
  }

  return (
    <div className="authentication-container">
      <Card title="Log into your branch" sectioned>
        <Form onSubmit={signIn}>
          <FormLayout>
            <TextField value={username} onChange={onChangeUsername} label="Username" />
            <TextField
              type="password"
              value={password}
              onChange={onChangePassword}
              label="Password"
            />
            <Button primary submit>
              Login
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </div>
  )
}

export default Profile
