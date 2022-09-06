import React, {useState, useRef} from 'react'
import Input from './Input';

export default function Ref02() {

  const [name, setName] = useState('');  

  const textRef = useRef(null);

  const handleFocus = () => {
        setName('Tech2 01');  
        textRef.current.focus();
        textRef.current.style.border = '1px solid red';
  }

  const handleSetValue=  () => {
        setName('Tech2 02');  
        textRef.current.value = 'Tech2';
        console.log(textRef);
  }

//   const h2Ref = (element) => {
//       element.style.color = 'red';  
//   }

  return (
    <div style={{margin: '5%'}}>
        {/* <h2 ref={h2Ref}>useRef React</h2> */}
        <Input ref={textRef} name={'Tech2 Solutions'}/>
        <button type={'button'} onClick={handleFocus}>Focus</button>
        <button type={'button'} onClick={handleSetValue}>Set Value</button>
        <p>{name}</p>
    </div>
  )
}
