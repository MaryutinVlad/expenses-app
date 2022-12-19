import { createContext } from "react";

interface AuthContextTypes {
  loggedIn: boolean
}

const defaultAuth = {
  loggedIn: false
}

const AuthContext = createContext<AuthContextTypes>(defaultAuth)

export default AuthContext