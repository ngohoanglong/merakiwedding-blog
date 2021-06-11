import { createContext } from "react"

const ScreenContext = createContext()
const ScreenProvider = ({ screen = 'xs', children }) => {
  return <ContextLocal.Provider value={{
    screen
  }}>
    {children}
  </ContextLocal.Provider>
}
export const useScreen = () => {
  return useContext(ScreenContext)
}
export default ScreenProvider