import { useState, useCallback, useEffect } from "react"
import { Card, Button, TextField, Form, FormLayout } from "@shopify/polaris"
import { useMutation } from "react-query"
import { AuthService } from "../core/services"
import { useLogin } from "../core/hooks"

const Profile = React.forwardRef(({ setUser }, ref) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { login, status, data, error } = useLogin()

  const onChangeUsername = useCallback((newValue) => {
    setUsername(newValue)
  }, [])

  const onChangePassword = useCallback((newValue) => {
    setPassword(newValue)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
    // setUser(data)
  }

  useEffect(() => {
    setUser(data)
  }, [data])

  return (
    <div className="authentication-container">
      <Card title="Log into your branch" sectioned>
        <Form onSubmit={handleSubmit}>
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
})

export default Profile
