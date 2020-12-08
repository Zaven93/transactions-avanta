import Amplify, { Auth } from "aws-amplify"
import config from "../../aws-exports"

Amplify.configure(config)

export const login = ({ username, password }) => Auth.signIn(username, password)

export const signUp = ({ username, password }) =>
  Auth.signUp({ username, password, attributes: { email: "avanta-clinics@gmail.com" } })

export const confirmSignUp = ({ username, code }) => Auth.confirmSignUp(username, code)
