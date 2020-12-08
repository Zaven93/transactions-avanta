import React, { useState, useCallback, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { Card, Button } from "@shopify/polaris"
import { Icon, Dimmer, Loader } from "semantic-ui-react"
import { useMutation } from "react-query"
import { AuthService } from "../core/services"
import { useLogin } from "../core/hooks"

const Login = ({ setUser }) => {
  const [password, setPassword] = useState("")
  const [activeUsername, setActiveUsername] = useState(false)
  const [activePassword, setActivePassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loginErrorMessage, setLoginErrorMessage] = useState({
    usernameError: "",
    passwordError: "",
  })

  const { handleSubmit, errors, register } = useForm()

  const { login, status, data, error: loginError } = useLogin()

  useEffect(() => {
    setUser(data)
  }, [data])

  useEffect(() => {
    if (!loginError) {
      return
    }
    if (loginError.code === "UserNotFoundException") {
      return setLoginErrorMessage({
        ...loginErrorMessage,
        username: "User with such a username doesn't exist",
      })
    }
    if (loginError.code === "NotAuthorizedException") {
      return setLoginErrorMessage({ ...loginErrorMessage, password: "Incorrect password" })
    }
  }, [loginError])

  console.log("Login error Zaven jan", loginError)

  return (
    <div className="authentication-container">
      <Card title="Log into your branch" sectioned>
        <form onSubmit={handleSubmit(login)}>
          <div className="form-controll">
            <input
              name="username"
              ref={register({ required: "Username is required!" })}
              onChange={() => setLoginErrorMessage("")}
              onBlur={(e) => {
                if (e.target.value) {
                  return setActiveUsername(true)
                }
                return setActiveUsername(false)
              }}
            />
            <Icon name="user" />
            <label className={activeUsername ? "active" : ""} htmlFor="username">
              Username
            </label>
            {loginErrorMessage.username && (
              <p className="error-notification">{loginErrorMessage.username}</p>
            )}
            {loginErrorMessage && errors.username && (
              <p className="error-notification">{errors.username.message}</p>
            )}
          </div>
          <div className="form-controll">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              ref={register({ required: "Password is required!" })}
              onChange={(e) => {
                setPassword(e.target.value)
                setLoginErrorMessage({ ...loginErrorMessage, password: "" })
              }}
              onBlur={(e) => {
                if (e.target.value) {
                  return setActivePassword(true)
                }
                return setActivePassword(false)
              }}
            />
            <Icon name="lock" />
            <label className={activePassword ? "active" : ""} htmlFor="password">
              Password
            </label>
            <Icon
              className={password ? "show-eye" : "not-show-eye"}
              onClick={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye slash" : "eye"}
              style={{ color: showPassword ? "#6774c8" : "" }}
            />
            {loginErrorMessage.password && (
              <p className="error-notification">{loginErrorMessage.password}</p>
            )}
            {!loginErrorMessage.password && errors.password && (
              <p className="error-notification">{errors.password.message}</p>
            )}
          </div>
          <Button primary submit>
            <Icon name="sign-in" /> Login
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Login
