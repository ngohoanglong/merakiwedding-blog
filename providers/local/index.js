import { locals } from "const";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const ContextLocal = React.createContext()
const LocalProvider = ({ children, initialLocale = "en" }) => {
  const [local, setLocal] = useState(locals.en)
  return <ContextLocal.Provider value={{
    local,
    setLocal
  }}>
    {children}
  </ContextLocal.Provider>
}
export const useLocal = () => {
  const localdata = useContext(ContextLocal)
  const { locale, push, pathname, query, } = useRouter()
  // if (localdata) return localdata
  return {
    local: locale,
    setLocal: (locale) => {
      console.log(locale)
      push({
        pathname,
        query,
        locale,

      })
    }
  }
}
export default LocalProvider