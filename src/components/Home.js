import React from 'react'
import {WithContext} from '../context/WithContext'

// import { AppContext } from '../context/ContextProvider'

function Home({store}) {

//   const context = useContext(AppContext);  

//   const users = context.store.users;

//   console.log(users);

//console.log(store);

  return (
    <h1>Home</h1>
  )
}

export default WithContext(Home); //Higher Order Component