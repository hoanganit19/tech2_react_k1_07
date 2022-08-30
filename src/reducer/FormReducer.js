import React, {useReducer} from 'react'

export default function FormReducer() {

 
  //Tạo reducer  
  const emailReducer = (prevName, newName) => {
    //    console.log(`Cũ: ${prevName}`); 
    //    console.log(`Mới: ${newName}`); 
       return newName;
  }  

  //Tạo giá trị ban đầu
  const initName = '';

  const [email, setEmail] = useReducer(emailReducer, initName); 

  const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log(email);
  } 

  const changeValue = (e) => {
    setEmail(e.target.value);
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type={'text'} name={'email'} placeholder={'Email'} onChange={changeValue}/>
            <button type={'submit'}>Submit</button>
        </form>
    </>
  )
}
