import { get } from "lodash"
import { useContext } from "react"

const ContextSource = React.createContext()
const SourceProvider = ({ source, local = 'en', children }) => {
  return <ContextSource.Provider value={{
    local,
    get: (path, fallbackValue = "/favicon.png") => {
      const result = get(source, `${local}.${path}`)
      if (fallbackValue && typeof fallbackValue !== typeof result) {
        console.error('invalid value')
      }
      return result || fallbackValue
    }
  }}>
    {children}
  </ContextSource.Provider>
}
export const useSource = () => {
  return useContext(ContextSource)
}
export default SourceProvider