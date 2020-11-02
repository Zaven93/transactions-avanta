import React, { useState, useEffect, useRef, useCallback } from "react"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { Page, Button, Modal, Badge, Stack } from "@shopify/polaris"
import { Table, Popup, Header, Icon } from "semantic-ui-react"
import { useForm } from "react-hook-form"
import { useConfirmSignUp, useSignUp, useCreateBranch, useListBranches } from "../core/hooks"
import ProductList from "./ProductsList"
import { formatDate } from "../utils/helper"
import BranchProducts from "./BranchProducts"
import BranchList from "./BranchList"
import AdminBranchInfo from "./AdminBranchInfo"
import { createBranch } from "../graphql/mutation"
import { listBranchs } from "../graphql/queries"

const BranchConsole = ({ updateUser }) => {
  const [active, setActive] = useState(false)
  const [activeBranchName, setActiveBranchName] = useState(false)
  const [activeUsername, setActiveUsername] = useState(false)
  const [activePassword, setActivePassword] = useState(false)
  const [activeEmail, setActiveEmail] = useState(false)
  const [activeCode, setActiveCode] = useState(false)
  const [branchName, setBranchName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formType, setFormType] = useState("signUp")
  const [userSub, setUserSub] = useState(null)
  const [branches, setBranches] = useState("")
  const [branchId, setBranchId] = useState(null)

  const { signUserUp, data } = useSignUp()
  const { confirmSignUp } = useConfirmSignUp()
  const { createBranch, data: createdBranch } = useCreateBranch()
  const { data: branchesData, refetch: listBranches } = useListBranches()
  const { handleSubmit, errors, register } = useForm()

  const handleChange = () => {
    setActive(!active)
  }

  const onSubmit = (data) => {
    const { username, password, email } = data
    console.log("Submitted data", data)
    try {
      signUserUp({ username, password, email })
      setFormType("confirm")
    } catch (error) {
      console.log(error)
    }
  }

  const onConfirm = (data) => {
    const { username, code } = data
    try {
      confirmSignUp({ username, code })
      createBranch({ userSub, username, branchName })
      setFormType("signUp")
      handleChange()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setUserSub(data && data.userSub)
  }, [data])

  useEffect(() => {
    listBranches()
  }, [])

  useEffect(() => {
    setBranches(branchesData && branchesData.data)
  }, [branchesData])

  return (
    <>
      {branchId && <AdminBranchInfo setBranchId={setBranchId} branchId={branchId} />}
      {!branchId && (
        <>
          <Stack>
            <Stack.Item fill>
              <Button onClick={handleChange} primary>
                <Icon name="code branch" /> Create branch
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
                <Icon name="sign out" /> Logout
              </Button>
            </Stack.Item>
          </Stack>
          <BranchList setBranchId={setBranchId} />
          <Modal open={active} onClose={handleChange} title="Fill in Branch info">
            <Modal.Section>
              {formType === "signUp" && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-controll">
                    <input
                      name="branchName"
                      onChange={(e) => setBranchName(e.target.value)}
                      ref={register({ required: "Branch name is required!" })}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveBranchName(true)
                        }
                        return setActiveBranchName(false)
                      }}
                    />
                    <Icon name="code branch" />
                    <label className={activeBranchName ? "active" : ""} htmlFor="branchName">
                      Branch Name
                    </label>
                    {errors.branchName && (
                      <p className="error-notification">{errors.branchName.message}</p>
                    )}
                  </div>
                  <div className="form-controll">
                    <input
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      ref={register({ required: "Username is required!" })}
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
                    {errors.username && (
                      <p className="error-notification">{errors.username.message}</p>
                    )}
                  </div>
                  <div className="form-controll">
                    <input
                      name="email"
                      ref={register({ required: "Email is required!" })}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveEmail(true)
                        }
                        return setActiveEmail(false)
                      }}
                    />
                    <Icon name="mail" />
                    <label className={activeEmail ? "active" : ""} htmlFor="email">
                      Email
                    </label>
                    {errors.email && <p className="error-notification">{errors.email.message}</p>}
                  </div>
                  <div className="form-controll">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      ref={register({ required: "Password is required!" })}
                      onChange={(e) => setPassword(e.target.value)}
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
                    {errors.password && (
                      <p className="error-notification">{errors.password.message}</p>
                    )}
                  </div>
                  <Button primary submit>
                    <Icon name="sign-in" /> Create Branch
                  </Button>
                </form>
              )}
              {formType === "confirm" && (
                <form onSubmit={handleSubmit(onConfirm)}>
                  <div className="form-controll">
                    <input
                      name="username"
                      value={username}
                      ref={register({ required: "Username is required!" })}
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
                    {errors.username && (
                      <p className="error-notification">{errors.username.message}</p>
                    )}
                  </div>
                  <div className="form-controll">
                    <input
                      name="code"
                      ref={register({ required: "Confirm code is required!" })}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveCode(true)
                        }
                        return setActiveCode(false)
                      }}
                    />
                    <Icon name="unlock alternate" />
                    <label className={activeCode ? "active" : ""} htmlFor="code">
                      Confirm code
                    </label>
                    {errors.code && <p className="error-notification">{errors.code.message}</p>}
                  </div>
                  <Button primary submit>
                    <Icon name="sign-in" /> Confirm
                  </Button>
                </form>
              )}
            </Modal.Section>
          </Modal>
        </>
      )}
    </>
  )
}

export default BranchConsole
