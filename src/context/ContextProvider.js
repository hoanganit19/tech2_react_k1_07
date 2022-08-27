import React, {useState, useEffect} from 'react'

export const AppContext = React.createContext();

export default function ContextProvider({children}) {

  //Global State
  const [store, setStore] = useState({});

  useEffect(() => {
    const users = {name: 'Hoàng An', age: 30}

    setStore(
        {
            users: users
        }
    );
  }, [])  

  return (
       <AppContext.Provider value={{store: store}}>
            {children}
       </AppContext.Provider> 
  )
}
