import React, {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

/*
- lấy value từng input
- submit => check value => set message
- show message
*/
export default function Validation() {

  const validationReducer = (state, action) => {
      const {type, value} = action;
      
      switch(type){
        case 'change_value':
        return {
            ...state,
            form: value
        }

        case 'set_error':
          
        return {
            ...state,
            errors: value
        }

        default: 
        throw new Error(`Type error`);

      }
  } 
  
  const [state, dispatch] = useReducer(validationReducer, {
    form: {
        email: '',
        password: ''
    },

    errors: {
        email: '',
        password: ''
    }
  }); 

  const changeValue = (e) => {

    const data = {...state.form}

    data[e.target.name] = e.target.value;

    dispatch({
        type: 'change_value',
        value: data
    }); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const {email, password} = state.form;

    const errors = {...state.errors};

    if (email==''){
        errors.email = 'Vui lòng nhập email';
    }else{
        errors.email = '';
    }

    if (password==''){
        errors.password = 'Vui lòng nhập mật khẩu';
    }else{
        errors.password = '';
    }

    dispatch({
        type: 'set_error',
        value: errors
    })
  }  

  return (
    <div className={'container'}>
        <div className={'row justify-content-center'}>
            <div className={'col-6'}>
                <form onSubmit={handleSubmit}>
                    <div className={'mb-3'}>
                        <label>Email</label>
                        <input type={'email'} className={'form-control'} name={'email'} placeholder={'Email...'} onChange={changeValue}/>
                        <span className={'text-danger'}>{state.errors.email}</span>
                    </div>

                    <div className={'mb-3'}>
                        <label>Password</label>
                        <input type={'password'} className={'form-control'} name={'password'} placeholder={'Password...'} onChange={changeValue}/>
                        <span className={'text-danger'}>{state.errors.password}</span>
                    </div>

                    <button type={'submit'} className={'btn btn-primary'}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
