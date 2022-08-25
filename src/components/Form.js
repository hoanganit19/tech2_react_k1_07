import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

  const [form, setForm] = useState({
      email: '',
      password: ''      
  })  

  const [errors, setError] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const {email, password} = form;

    const errorsObj = {};

    if (email===''){

        errorsObj.email = 'Vui lòng nhập email';
    }

    if (password===''){

        errorsObj.password = 'Vui lòng nhập mật khẩu';
    }

    setError(errorsObj);

    if (Object.keys(errorsObj).length===0){
        console.log(email);
        console.log(password);
    }

  };

  const changeValue = (e) => {
    const data = {...form};
    
    data[e.target.name] = e.target.value;

    setForm(data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Login Page</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type={"email"}
                name={"email"}
                className={"form-control"}
                placeholder={"Email..."}
                onChange={changeValue}
              />
              <span className={'text-danger'}>{errors.email}</span>
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type={"password"}
                name={"password"}
                className={"form-control"}
                placeholder={"Password..."}
                onChange={changeValue}
              />
               <span className={'text-danger'}>{errors.password}</span>
            </div>

            <button type={"submit"} className={"btn btn-primary"}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
