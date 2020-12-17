import React, { useState, useEffect, useRef, useCallback } from 'react'
import AWS from 'aws-sdk'
import { Auth } from 'aws-amplify'
import { Page, Button, Modal, Badge, Stack, Card } from '@shopify/polaris'
import { Table, Popup, Header, Icon } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import {
    useConfirmSignUp,
    useSignUp,
    useCreateBranch,
    useListBranches,
    useCheckBranchName
} from '../core/hooks'
import ProductList from './ProductsList'
import { formatDate } from '../utils/helper'
import BranchProducts from './BranchProducts'
import BranchList from './BranchList'
import AdminBranchInfo from './AdminBranchInfo'
import { createBranch } from '../graphql/mutation'
import { listBranchs } from '../graphql/queries'

const BranchConsole = ({ updateUser }) => {
    const [active, setActive] = useState(false)
    const [activeFields, setActiveFields] = useState({
        activeBranchName: false,
        activeUsername: false,
        activePassword: false,
        activeEmail: false,
        activeCode: false
    })
    const [branchName, setBranchName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [formType, setFormType] = useState('signUp')
    const [userSub, setUserSub] = useState(null)
    const [branches, setBranches] = useState('')
    const [branchId, setBranchId] = useState(null)
    const [confirmErrorMessage, setConfirmErrorMessage] = useState()
    const [signUpErrorMessage, setSignUpErrorMessage] = useState('')
    const [checkBranchNameErrorMessage, setCheckBranchNameErrorMessage] = useState('')

    const { signUserUp, data: signUpData, error: signUpError } = useSignUp()
    const { confirmSignUp, data: confirmSignUpData, error: confirmSignUpError } = useConfirmSignUp()
    const { createBranch, data: createdBranch, error: createdBranchError } = useCreateBranch()
    const { data: branchesData, refetch: listBranches } = useListBranches()
    const { data: branchByNameData, refetch: getBranchByName } = useCheckBranchName(branchName)
    const { handleSubmit, errors, register, reset, getValues } = useForm()

    const handleChange = () => {
        setActive(!active)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        handleSubmit(async (data) => {
            const { username, password } = data

            const branchByName = await getBranchByName()

            if (branchByName && branchByName.data.branchByName.items.length > 0) {
                setCheckBranchNameErrorMessage('Branch with such a name already exists')
                return
            } else {
                const signUpData = await signUserUp({ username, password })

                if (signUpData === undefined) {
                    setSignUpErrorMessage('Branch with such a username already exists')
                    return
                } else {
                    const branchCreated = await createBranch({
                        userSub: signUpData.userSub,
                        username,
                        branchName
                    })

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
                }
            }
        })(e)
    }

    useEffect(() => {
        setUserSub(signUpData && signUpData.userSub)
    }, [signUpData])

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
                <Page fullWidth title="Branches">
                    <div className="branches-buttons">
                        <Stack>
                            <Stack.Item fill />
                            <Stack.Item>
                                <Button onClick={handleChange} primary>
                                    <Icon name="code branch" /> Create branch
                                </Button>
                            </Stack.Item>
                            <Stack.Item>
                                <Button
                                    id="Logout"
                                    onClick={() => {
                                        Auth.signOut()
                                        updateUser(null)
                                    }}>
                                    <Icon name="sign out" /> Logout
                                </Button>
                            </Stack.Item>
                        </Stack>
                    </div>
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
                            setFormType('signUp')
                            setSignUpErrorMessage('')
                            setCheckBranchNameErrorMessage('')
                            reset()
                        }}
                        title="Fill in Branch info">
                        <Modal.Section>
                            {formType === 'signUp' && (
                                <form onSubmit={onSubmit}>
                                    <div className="form-controll">
                                        <input
                                            name="branchName"
                                            onChange={(e) => {
                                                setBranchName(e.target.value)
                                                setCheckBranchNameErrorMessage('')
                                            }}
                                            ref={register({ required: 'Branch name is required!' })}
                                            onBlur={(e) => {
                                                if (e.target.value) {
                                                    return setActiveFields({
                                                        ...activeFields,
                                                        activeBranchName: true
                                                    })
                                                }
                                                return setActiveFields({
                                                    ...activeFields,
                                                    activeBranchName: false
                                                })
                                            }}
                                        />
                                        <Icon name="code branch" />
                                        <label
                                            className={
                                                activeFields.activeBranchName ? 'active' : ''
                                            }
                                            htmlFor="branchName">
                                            Branch Name
                                        </label>
                                        {checkBranchNameErrorMessage && (
                                            <p className="error-notification">
                                                {checkBranchNameErrorMessage}
                                            </p>
                                        )}
                                        {!checkBranchNameErrorMessage && errors.branchName && (
                                            <p className="error-notification">
                                                {errors.branchName.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-controll">
                                        <input
                                            name="username"
                                            onChange={(e) => {
                                                setUsername(e.target.value)
                                                setSignUpErrorMessage('')
                                            }}
                                            ref={register({ required: 'Username is required!' })}
                                            onBlur={(e) => {
                                                if (e.target.value) {
                                                    return setActiveFields({
                                                        ...activeFields,
                                                        activeUsername: true
                                                    })
                                                }
                                                return setActiveFields({
                                                    ...activeFields,
                                                    activeUsername: false
                                                })
                                            }}
                                        />
                                        <Icon name="user" />
                                        <label
                                            className={activeFields.activeUsername ? 'active' : ''}
                                            htmlFor="username">
                                            Username
                                        </label>
                                        {signUpErrorMessage && (
                                            <p className="error-notification">
                                                {signUpErrorMessage}
                                            </p>
                                        )}
                                        {!signUpErrorMessage && errors.username && (
                                            <p className="error-notification">
                                                {errors.username.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-controll">
                                        <input
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            ref={register({
                                                required: 'Password is required!',
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        'Password must be at least 8 characters long'
                                                }
                                            })}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onBlur={(e) => {
                                                if (e.target.value) {
                                                    return setActiveFields({
                                                        ...activeFields,
                                                        activePassword: true
                                                    })
                                                }
                                                return setActiveFields({
                                                    ...activeFields,
                                                    activePassword: false
                                                })
                                            }}
                                        />
                                        <Icon name="lock" />
                                        <label
                                            className={activeFields.activePassword ? 'active' : ''}
                                            htmlFor="password">
                                            Password
                                        </label>
                                        <Icon
                                            className={password ? 'show-eye' : 'not-show-eye'}
                                            onClick={() => setShowPassword(!showPassword)}
                                            name={showPassword ? 'eye slash' : 'eye'}
                                            style={{ color: showPassword ? '#6774c8' : '' }}
                                        />
                                        {errors.password && (
                                            <p className="error-notification">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                    <Button primary submit>
                                        <Icon name="sign-in" /> Create Branch
                                    </Button>
                                </form>
                            )}
                        </Modal.Section>
                    </Modal>
                </Page>
            )}
        </>
    )
}

export default BranchConsole
