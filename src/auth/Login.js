import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {

  const SERVER_API = `http://localhost:3004`;

  const [email, setEmail]  = useState('');
  const [password, setPassword]  = useState('');
  
  let [isLogin, setStatus] = useState(localStorage.getItem('accessToken')?true:false);

  let [token, setToken] = useState('');

  let [productList, setProducts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('accessToken')){
        setStatus(true);
        setToken(localStorage.getItem('accessToken'));
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [token]);

  const changeValue = (e) => {
      if (e.target.name==='email'){
        setEmail(e.target.value);  
      }  

      if (e.target.name==='password'){
        setPassword(e.target.value);  
      } 
  } 

  const handleLogin = (e) => {
    e.preventDefault();

    const dataLogin = {
        email: email,
        password: password
    }
    
    fetch(`${SERVER_API}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataLogin)
    })
    .then(response => response.json())
    .then(response => {
        if (response.accessToken!==undefined && response.accessToken!==null){
            localStorage.setItem('accessToken', response.accessToken);
            setEmail('');
            setPassword('');
            setStatus(true);
        }
    })

  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('accessToken');
    setStatus(false);
  }

  const getProducts = () => {
    
    if (token){
        fetch(`${SERVER_API}/660/products`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+token
            }
        })
        .then(response => response.json())
        .then(products => {
            setProducts(products);
        })
    }
    
  }

  return (
    <div className={"container"}>
        {
            isLogin
            ?
            <>
                <h2>Chào bạn</h2>
                <a href="#" onClick={handleLogout}>Đăng xuất</a>
                <hr />
                {
                    productList.map(product => <p key={product.id}>{product.name}</p>) 
                }
            </>
            :
            <>
                <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
      </form>
            </>
        }
      
    </div>
  );
}
