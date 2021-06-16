import { get } from "lodash"
import React, { useContext } from "react";

const ContextSource = React.createContext()
const SourceProvider = ({ source, local = 'en', children }) => {
  return <ContextSource.Provider value={{
    source,
    local,
    get: (path, fallbackValue) => {
      const result = get(source, `${local}.${path}`, fallbackValue)
      // if (fallbackValue && typeof fallbackValue !== typeof result) {
      //   console.error('invalid value')
      // }
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