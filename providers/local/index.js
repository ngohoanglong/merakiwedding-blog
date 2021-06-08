const ContextLocal = React.createContext()
const LocalProvider = ({ local = 'en', children }) => {
  return <ContextLocal.Provider value={{
    local
  }}>
    {children}
  </ContextLocal.Provider>
}
export const useLocal = () => {
  return useContext(ContextLocal)
}
export default LocalProvider