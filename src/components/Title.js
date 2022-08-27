import React, {useContext} from 'react'

import { ThemeContext } from './Theme'

export default function Title() {

  const context = useContext(ThemeContext);

  return (
    <h1 className={`theme-${context.theme}`}>Tech2</h1>
  )
}
