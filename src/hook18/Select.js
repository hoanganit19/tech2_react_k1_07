import React, {useId, useState} from 'react'

export default function Select({name, label, data}) {

  const id = useId();

  const {status, setStatus} = useState(0);

  const handleSetStatus = (e) => {
    setStatus(e.target.value);  
  }

  return (
    <>
        <label htmlFor={id}>{label}</label>
        <select value={status} id={id} name={name} onChange={handleSetStatus}>
            {
                data.map(option => {
                    if (option.isSelected){
                        return <option key={option.value} value={option.value} selected>{option.name}</option>
                    }

                    return <option key={option.value} value={option.value}>{option.name}</option>
                })
            }
        </select>
    </>
  )
}
