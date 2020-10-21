import React, { useState, useEffect, useRef, useCallback } from "react"
import { Auth, API, graphqlOperation } from "aws-amplify"
import gql from "graphql-tag"
import { v4 as uuidv4 } from "uuid"
import { Page, Button, Modal, Form, FormLayout, TextField, Badge, Stack } from "@shopify/polaris"
import { Table, Popup, Header, Icon } from "semantic-ui-react"
import ProductList from "./ProductsList"
import { formatDate } from "../utils/helper"
import config from "../aws-exports"
import BranchProducts from "./BranchProducts"
import BranchList from "./BranchList"
import AdminBranchInfo from "./AdminBranchInfo"
import { createBranch } from "../graphql/mutation"
import { listBranchs } from "../graphql/queries"

API.configure(config)

const BranchConsole = ({ updateUser }) => {
  const [active, setActive] = useState(false)
  const [branchName, setBranchName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const [formType, setFormType] = useState("signUp")
  const [userSub, setUserSub] = useState(null)
  const [branches, setBranches] = useState("")
  const [branchId, setBranchId] = useState(null)

  const onChangeBranchName = useCallback((newValue) => {
    setBranchName(newValue)
  }, [])

  const onChangeUsername = useCallback((newValue) => {
    setUsername(newValue)
  }, [])

  const onChangePassword = useCallback((newValue) => {
    setPassword(newValue)
  }, [])

  const onChangeEmail = useCallback((newValue) => {
    setEmail(newValue)
  }, [])

  const onChangeCode = useCallback((newValue) => {
    setCode(newValue)
  }, [])

  const handleChange = () => {
    setActive(!active)
  }

  const signUp = async (e) => {
    e.preventDefault()
    try {
      const user = await Auth.signUp({ username, password, attributes: { email } })
      setUserSub(user.userSub)
      setFormType("confirm")
    } catch (error) {
      console.log(error)
    }
  }

  const confirm = async (e) => {
    e.preventDefault()
    try {
      const confirmedUser = await Auth.confirmSignUp(username, code)
      const branch = await API.graphql(
        graphqlOperation(createBranch, {
          input: {
            adminId: userSub,
            branchUsername: username,
            branchName: branchName,
            id: uuidv4(),
          },
        })
      )
      setFormType("signUp")
      handleChange()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchBranches = async () => {
    try {
      const getBranches = await API.graphql(graphqlOperation(listBranchs))
      setBranches(getBranches.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBranches()
  }, [])

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
                <Form onSubmit={signUp}>
                  <FormLayout>
                    <TextField
                      value={branchName}
                      onChange={onChangeBranchName}
                      label="Branch Name"
                    />
                    <TextField
                      value={username}
                      onChange={onChangeUsername}
                      label="Branch admin username"
                    />
                    <TextField value={email} onChange={onChangeEmail} label="Branch admin email" />
                    <TextField
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                      label="Branch admin password"
                    />
                    <Button primary submit>
                      Create Branch
                    </Button>
                  </FormLayout>
                </Form>
              )}
              {formType === "confirm" && (
                <Form onSubmit={confirm}>
                  <FormLayout>
                    <TextField
                      value={username}
                      onChange={onChangeUsername}
                      label="Branch admin username"
                    />
                    <TextField value={code} onChange={onChangeCode} label="Confirmation code" />
                    <Button primary submit>
                      Confirm
                    </Button>
                  </FormLayout>
                </Form>
              )}
            </Modal.Section>
          </Modal>
        </>
      )}
    </>
  )
}

export default BranchConsole
