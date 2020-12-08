import React, { useState, useEffect, useRef, useCallback } from "react"
import AWS from "aws-sdk"
import { Page, Button, Modal, Badge, Stack } from "@shopify/polaris"
import { Table, Popup, Header, Icon } from "semantic-ui-react"
import { useForm } from "react-hook-form"
import {
  useConfirmSignUp,
  useSignUp,
  useCreateBranch,
  useListBranches,
  useCheckBranchName,
} from "../core/hooks"
import ProductList from "./ProductsList"
import { formatDate } from "../utils/helper"
import BranchProducts from "./BranchProducts"
import BranchList from "./BranchList"
import AdminBranchInfo from "./AdminBranchInfo"
import { createBranch } from "../graphql/mutation"
import { listBranchs } from "../graphql/queries"

const BranchConsole = ({ updateUser }) => {
  const [active, setActive] = useState(false)
  const [activeFields, setActiveFields] = useState({
    activeBranchName: false,
    activeUsername: false,
    activePassword: false,
    activeEmail: false,
    activeCode: false,
  })
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
  const [confirmErrorMessage, setConfirmErrorMessage] = useState()
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("")
  const [checkBranchNameErrorMessage, setCheckBranchNameErrorMessage] = useState("")

  const { signUserUp, data: signUpData, error: signUpError } = useSignUp()
  const { confirmSignUp, data: confirmSignUpData, error: confirmSignUpError } = useConfirmSignUp()
  const { createBranch, data: createdBranch, error: createdBranchError } = useCreateBranch()
  const { data: branchesData, refetch: listBranches } = useListBranches()
  const { data: branchByNameData, refetch: getBranchByName } = useCheckBranchName(branchName)
  const { handleSubmit, errors, register, reset, getValues } = useForm()

  const handleChange = () => {
    setActive(!active)
  }

  // const onSubmit = (e) => {
  //   e.preventDefault()

  //   handleSubmit(() => {
  //     // const { username, password } = data

  //     // console.log("Submitted data", data)

  //     getBranchByName()

  //     console.log("Test Zaven")
  //     // try {
  //     //   await getBranchByName()
  //     //   if (branchByNameData && branchByNameData.data.branchByName.items.length > 0) {
  //     //     setCheckBranchNameErrorMessage("Branch with such a name already exists")
  //     //     return
  //     //   } else {
  //     //     await signUserUp({ username, password })
  //     //   }
  //     //   // await signUserUp({ username, password })
  //     //   if (signUpData === undefined && signUpError.code === "UsernameExistsException") {
  //     //     setSignUpErrorMessage("Branch with such a username already exists")
  //     //     return
  //     //   } else {
  //     //     await createBranch({ userSub, username, branchName })
  //     //     setActiveFields((activeFields) => {
  //     //       for (let key in activeFields) {
  //     //         if (activeFields.hasOwnProperty(key)) {
  //     //           activeFields[key] = false
  //     //         }
  //     //       }
  //     //       return activeFields
  //     //     })
  //     //     handleChange()
  //     //     reset()
  //     //   }
  //     // await createBranch({ userSub, username, branchName })
  //     // setActiveFields((activeFields) => {
  //     //   for (let key in activeFields) {
  //     //     if (activeFields.hasOwnProperty(key)) {
  //     //       activeFields[key] = false
  //     //     }
  //     //   }
  //     //   return activeFields
  //     // })
  //     // handleChange()
  //     // reset()
  //     // } catch (error) {
  //     //   console.log(error)
  //     // }
  //   })(e)
  // }

  useEffect(() => {
    if (!branchByNameData) {
      return
    }
    if (branchByNameData && branchByNameData.data.branchByName.items.length > 0) {
      setCheckBranchNameErrorMessage("Branch with such a name already exists")
      return
    }
    const { username, password } = getValues()
    signUserUp({ username, password })
  }, [branchByNameData])

  useEffect(() => {
    if (signUpData === undefined && signUpError && signUpError.code === "UsernameExistsException") {
      setSignUpErrorMessage("Branch with such a username already exists")
      return
    }
    const { username } = getValues()
    createBranch({ userSub, username, branchName })
    setActiveFields((activeFields) => {
      for (let key in activeFields) {
        if (activeFields.hasOwnProperty(key)) {
          activeFields[key] = false
        }
      }
      return activeFields
    })
    handleChange()
    reset()
  }, [signUpData, signUpError])

  useEffect(() => {
    setUserSub(signUpData && signUpData.userSub)
  }, [signUpData])

  useEffect(() => {
    listBranches()
  }, [])

  useEffect(() => {
    setBranches(branchesData && branchesData.data)
  }, [branchesData])

  console.log("Sign up error data", signUpError)
  console.log("Sign up data", signUpData)
  console.log("Branch name Data", branchByNameData)
  console.log("Form values", getValues())

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
          <Modal
            open={active}
            onClose={() => {
              handleChange()
              setActiveFields((activeFields) => {
                for (let key in activeFields) {
                  if (activeFields.hasOwnProperty(key)) {
                    activeFields[key] = false
                  }
                }
                return activeFields
              })
              setFormType("signUp")
              setSignUpErrorMessage("")
              setCheckBranchNameErrorMessage("")
              reset()
            }}
            title="Fill in Branch info">
            <Modal.Section>
              {formType === "signUp" && (
                <form onSubmit={onSubmit}>
                  <div className="form-controll">
                    <input
                      name="branchName"
                      onChange={(e) => {
                        setBranchName(e.target.value)
                        setCheckBranchNameErrorMessage("")
                      }}
                      ref={register({ required: "Branch name is required!" })}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveFields({ ...activeFields, activeBranchName: true })
                        }
                        return setActiveFields({ ...activeFields, activeBranchName: false })
                      }}
                    />
                    <Icon name="code branch" />
                    <label
                      className={activeFields.activeBranchName ? "active" : ""}
                      htmlFor="branchName">
                      Branch Name
                    </label>
                    {checkBranchNameErrorMessage && (
                      <p className="error-notification">{checkBranchNameErrorMessage}</p>
                    )}
                    {!checkBranchNameErrorMessage && errors.branchName && (
                      <p className="error-notification">{errors.branchName.message}</p>
                    )}
                  </div>
                  <div className="form-controll">
                    <input
                      name="username"
                      onChange={(e) => {
                        setUsername(e.target.value)
                        setSignUpErrorMessage("")
                      }}
                      ref={register({ required: "Username is required!" })}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveFields({ ...activeFields, activeUsername: true })
                        }
                        return setActiveFields({ ...activeFields, activeUsername: false })
                      }}
                    />
                    <Icon name="user" />
                    <label
                      className={activeFields.activeUsername ? "active" : ""}
                      htmlFor="username">
                      Username
                    </label>
                    {signUpErrorMessage && (
                      <p className="error-notification">{signUpErrorMessage}</p>
                    )}
                    {!signUpErrorMessage && errors.username && (
                      <p className="error-notification">{errors.username.message}</p>
                    )}
                  </div>
                  {/* <div className="form-controll">
                    <input
                      name="email"
                      ref={register({
                        required: "Email is required!",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveFields({ ...activeFields, activeEmail: true })
                        }
                        return setActiveFields({ ...activeFields, activeEmail: false })
                      }}
                    />
                    <Icon name="mail" />
                    <label className={activeFields.activeEmail ? "active" : ""} htmlFor="email">
                      Email
                    </label>
                    {errors.email && <p className="error-notification">{errors.email.message}</p>}
                  </div> */}
                  <div className="form-controll">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      ref={register({
                        required: "Password is required!",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters long",
                        },
                      })}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveFields({ ...activeFields, activePassword: true })
                        }
                        return setActiveFields({ ...activeFields, activePassword: false })
                      }}
                    />
                    <Icon name="lock" />
                    <label
                      className={activeFields.activePassword ? "active" : ""}
                      htmlFor="password">
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
              {/* {formType === "confirm" && (
                <form onSubmit={handleSubmit(onConfirm)}>
                  <div className="form-controll">
                    <input
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      ref={register({ required: "Username is required!" })}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveFields({ ...activeFields, activeUsername: true })
                        }
                        return setActiveFields({ ...activeFields, activeUsername: false })
                      }}
                    />
                    <Icon name="user" />
                    <label
                      className={activeFields.activeUsername ? "active" : ""}
                      htmlFor="username">
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
                      onChange={() => setConfirmErrorMessage("")}
                      onBlur={(e) => {
                        if (e.target.value) {
                          return setActiveFields({ ...activeFields, activeCode: true })
                        }
                        return setActiveFields({ ...activeFields, activeCode: false })
                      }}
                    />
                    <Icon name="unlock alternate" />
                    <label className={activeFields.activeCode ? "active" : ""} htmlFor="code">
                      Confirm code
                    </label>
                    {!errors.code && confirmErrorMessage && (
                      <p className="error-notification">{confirmErrorMessage}</p>
                    )}
                    {errors.code && <p className="error-notification">{errors.code.message}</p>}
                  </div>
                  <Button primary submit>
                    <Icon name="sign-in" /> Confirm
                  </Button>
                </form>
              )} */}
            </Modal.Section>
          </Modal>
        </>
      )}
    </>
  )
}

export default BranchConsole
