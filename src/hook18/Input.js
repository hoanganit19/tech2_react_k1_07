import React, {useId} from 'react'

export default function Input({type, placeholder, name, label}) {

  const id = useId();
  
  return (
        <>
        <label htmlFor={`${id}`}>{label}</label>
        <input id={`${id}`} type={type} placeholder={placeholder} defaultValue={''} name={name} />
        </>
  )
}
