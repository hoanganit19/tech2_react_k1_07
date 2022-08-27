import React, {useId} from 'react'
import { WithContext } from '../context/WithContext'

function About({store}) {
    console.log(store);

  return (
    <>
        <h1>About</h1>

        
    </>
  )
}

export default WithContext(About);