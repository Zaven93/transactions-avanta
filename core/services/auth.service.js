import Amplify, { Auth } from "aws-amplify"
import config from "../../aws-exports"

Amplify.configure(config)

export const login = ({ username, password }) => Auth.signIn(username, password)

export const signUp = ({ username, password, attributes: { email } }) =>
  Auth.signUp({ username, password, attributes: { email } })

export const confirmSignUp = ({ username, code }) => Auth.confirmSignUp(username, code)
