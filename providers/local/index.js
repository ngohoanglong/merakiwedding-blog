import { locals } from "const"
import { useContext, useState } from "react"

const ContextLocal = React.createContext()
const LocalProvider = ({ children }) => {
  const [local, setLocal] = useState(locals.en)
  return <ContextLocal.Provider value={{
    local,
    setLocal
  }}>
    {children}
  </ContextLocal.Provider>
}
export const useLocal = () => {
  return useContext(ContextLocal)
}
export default LocalProvider