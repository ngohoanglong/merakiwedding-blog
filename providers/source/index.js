import { get } from "lodash"
import { useContext } from "react"

const ContextSource = React.createContext()
const SourceProvider = ({ source, local = 'en', screen = 'xs', children }) => {
  return <ContextSource.Provider value={{
    local,
    screen,
    get: (path, fallbackValue = "/favicon.png") => {
      console.log({
        get, local, source, screen, path
      })
      return get(source, `${local}.${path}.${screen}`, get(source, `${local}.${path}`, fallbackValue))
    }
  }}>
    {children}
  </ContextSource.Provider>
}
export const useSource = () => {
  return useContext(ContextSource)
}
export default SourceProvider