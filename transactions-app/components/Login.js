import { useState, useCallback, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Card, Button, TextField, Form, FormLayout } from '@shopify/polaris'
import { Icon, Dimmer, Loader } from 'semantic-ui-react'
import { useMutation } from 'react-query'
import { AuthService } from '../core/services'
import { useLogin } from '../core/hooks'

const Login = ({ setUser }) => {
    const [password, setPassword] = useState('')
    const [activeUsername, setActiveUsername] = useState(false)
    const [activePassword, setActivePassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const passwordRef = useRef(null)
    const usernameRef = useRef(null)

    const { handleSubmit, errors, register } = useForm()

    const { login, status, data, error } = useLogin()

    const onChangeUsername = useCallback((newValue) => {
        setUsername(newValue)
    }, [])

    const onChangePassword = useCallback((newValue) => {
        setPassword(newValue)
    }, [])

    useEffect(() => {
        setUser(data)
    }, [data])

    console.log('Sign in status is', status)

    return (
        <div className="authentication-container">
            <Card title="Log into your branch" sectioned>
                <form onSubmit={handleSubmit(login)}>
                    <div className="form-controll">
                        <input
                            name="username"
                            ref={register({ required: 'Username is required!' })}
                            onBlur={(e) => {
                                if (e.target.value) {
                                    return setActiveUsername(true)
                                }
                                return setActiveUsername(false)
                            }}
                        />
                        <Icon name="user" />
                        <label className={activeUsername ? 'active' : ''} htmlFor="username">
                            Username
                        </label>
                        {errors.username && (
                            <p className="error-notification">{errors.username.message}</p>
                        )}
                    </div>
                    <div className="form-controll">
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            ref={register({ required: 'Password is required!' })}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value) {
                                    return setActivePassword(true)
                                }
                                return setActivePassword(false)
                            }}
                        />
                        <Icon name="lock" />
                        <label className={activePassword ? 'active' : ''} htmlFor="password">
                            Password
                        </label>
                        <Icon
                            className={password ? 'show-eye' : 'not-show-eye'}
                            onClick={() => setShowPassword(!showPassword)}
                            name={showPassword ? 'eye slash' : 'eye'}
                            style={{ color: showPassword ? '#6774c8' : '' }}
                        />
                        {errors.password && (
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
