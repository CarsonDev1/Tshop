import { createContext } from 'react'
import { getAccessTokenFromLs } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: () => void
}
const initalAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLs())
}

export const AppContext = createContext<AppContextInterface>(initalAppContext)
