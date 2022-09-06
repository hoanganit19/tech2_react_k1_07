import React, {useState, useCallback} from 'react'
import Content from './Content';

export default function Counter() {

  let [count, setCount] = useState(0);

  // const handleUp = () => {
  //   setCount(++count);
  // }  

  /*
  Khi sử dụng useCallback => Chỉ khởi tạo hàm 1 lần (Dựa vào tham số thứ 2 của hàm useCallback)
  */

  const handleUp = useCallback(()=>{
      setCount(++count);
  }, [])

  return (
    <div>
        <h1>Count: {count}</h1>
        <Content onUp={handleUp}/>
    </div>
  )
}
