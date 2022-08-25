import React, {useState} from 'react'

export default function Counter() {

  //Gọi hook => Phải viết trong function
  //console.log(useState());
  
  const [count, setCount] = useState(0); //Giá trị mặc định của useState là undefined

  const handleUp = () => {
    let newCount = count + 1;
    setCount(newCount);
  }

  const handleDown = () => {
    let newCount = count - 1;
    setCount(newCount);
  }

  return (
        <>
            <h1>Count: {count}</h1>
            <button type='button' onClick={handleDown}>-</button>
            <button type='button' onClick={handleUp}>+</button>
        </>
  )
}
