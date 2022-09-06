import React, {forwardRef} from 'react'

function Input(props, ref) {
  console.log(ref);  
  const {name} = props;
  return (
    <input type={'text'} ref={ref} placeholder={'Username...'}/>
  )
}

export default forwardRef(Input);