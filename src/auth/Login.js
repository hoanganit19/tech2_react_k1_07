import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HttpClient from "../core/HttpClient";
import Register from "./Register";

export default function Login() {
  const client = new HttpClient();

  const SERVER_API = `http://localhost:3004`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let [isLogin, setStatus] = useState(
    localStorage.getItem("accessToken") ? true : false
  );

  const [isLoading, setLoading] = useState(true);

  let [token, setToken] = useState("");

  let [productList, setProducts] = useState([]);

  const [msg, setMsg] = useState('');

  const [isRegister, setRegister] = useState(false);

  const setLogin = () => {
    setStatus(true);
    setToken(localStorage.getItem("accessToken"));
  }

  const resetForm = () => {
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLogin();
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [token]);

  const changeValue = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const dataLogin = {
      email: email,
      password: password,
    };

    client.login(`${SERVER_API}/login`, dataLogin).then((response) => {
      if (response.accessToken !== undefined && response.accessToken !== null) {
        localStorage.setItem("accessToken", response.accessToken);
        resetForm();
        setLogin();
      }
    }).catch(error => {
        if (!error.ok){
          setMsg(`Email hoặc mật khẩu không chính xác`);
        }
    });
    
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setStatus(false);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const getProducts = () => {
    if (token) {
      client
        .get(`${SERVER_API}/660/products`, token)
        .then((products) => {
          if (Array.isArray(products)) {
            setProducts(products);
          }
        })
        .catch((error) => {
          if (!error.ok) {
            logout();
          }
        });
    }
  };

  const renderProducts = () => {
    let jsx;
    if (productList.length) {
      jsx = productList.map((product) => (
        <p key={product.id}>{product.name}</p>
      ));
    }

    return jsx;
  };

  const handleToggleRegister = (e) => {
    e.preventDefault();
    setRegister(true);
  }

  return (
    <div className={"container"}>
      {isLoading ? (
        <p>Loading...</p>
      ) : isLogin ? (
        <>
          <h2>Chào bạn</h2>
          <a href="#" onClick={handleLogout}>
            Đăng xuất
          </a>
          <hr />
          {renderProducts()}
        </>
      ) : (
        <>
          {
            isRegister
            ?
            <Register />
            :
            <>
            <h1>Login</h1>
          <form onSubmit={handleLogin}>
            {
              msg!==''
              ?
              <div className="alert alert-danger">{msg}</div>
              :
              false
            }
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
              Login
            </button>
            <p><a href="#" onClick={handleToggleRegister}>Đăng ký tài khoản</a></p>
          </form>
            </>
          }
        </>
      )}
    </div>
  );
}
