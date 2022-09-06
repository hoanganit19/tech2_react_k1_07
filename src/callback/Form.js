import React, {memo, useContext} from 'react'

function Form({onChangeName}) {

    console.log('re-render form');

    const submitForm = () => {
        console.log('submit');
    };

  return (
    <div>
        <h2>Gửi liên hệ</h2>
        <input type={'text'} placeholder={'Nhập tên...'} onChange={onChangeName}/>
        <button type={'button'} onClick={submitForm}>Gửi</button>
    </div>
  )
}

export default memo(Form);