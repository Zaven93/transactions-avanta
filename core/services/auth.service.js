import Amplify, { Auth } from "aws-amplify"
import config from "../../aws-exports"

Amplify.configure(config)

export const login = ({ username, password }) => Auth.signIn(username, password)
