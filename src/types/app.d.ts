declare module 'types' {
  export type AuthContextType = {
    authed: boolean
    login: () => void
    logout: () => void
  }
}