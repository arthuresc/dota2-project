import { ReactNode } from "react"

declare module 'types' {
  type AuthContextType = {
    authed: boolean
    login: () => void
    logout: () => void
  }

  type AuthProviderProps = {
    children: ReactNode
  }

  type RequireAuthProps = {
    children: ReactNode
  }


  

}