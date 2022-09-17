import React, { useState } from "react";
import HttpClient from "../core/HttpClient";

export default function Register() {
  const SERVER_API = `http://localhost:3004`;
  const client = new HttpClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [msg, setMsg] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const dataRegister = {
      name: name,
      email: email,
      password: password,
    };

    client.register(`${SERVER_API}/register`, dataRegister).then((response) => {
      if (response.accessToken !== undefined && response.accessToken !== null) {
        if (response.accessToken !== "") {
          setMsg("Chúc mừng bạn đã đăng ký thành công");
        }
      }
    });
  };

  const changeValue = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }

    if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        {msg !== "" ? <div className="alert alert-success">{msg}</div> : false}
        <div className={"mb-3"}>
          <label>Tên</label>
          <input
            type={"text"}
            name={"name"}
            className={"form-control"}
            placeholder={"Tên..."}
            onChange={changeValue}
            value={name}
            required
          />
        </div>

        <div className={"mb-3"}>
          <label>Email</label>
          <input
            type={"email"}
            name={"email"}
            className={"form-control"}
            placeholder={"Email..."}
            onChange={changeValue}
            value={email}
            required
          />
        </div>

        <div className={"mb-3"}>
          <label>Password</label>
          <input
            type={"password"}
            name={"password"}
            className={"form-control"}
            placeholder={"Password..."}
            onChange={changeValue}
            value={password}
            required
          />
        </div>

        <button type={"submit"} className={"btn btn-primary"}>
          Đăng ký
        </button>
      </form>
    </>
  );
}
