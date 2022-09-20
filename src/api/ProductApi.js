import React, { useEffect, useState } from "react";
import HttpClient from "../core/HttpClient";

export default function ProductApi() {
  const client = new HttpClient();

  const [token, setToken] = useState(
    sessionStorage.getItem("xsrf-token")
      ? sessionStorage.getItem("xsrf-token")
      : null
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (token == null) {

      client
        .csrfToken(`https://unicode.vn/api/products/create_token.php`)
        .then((response) => {
          if (response.accessToken !== undefined) {
            sessionStorage.setItem("xsrf-token", response.accessToken);
            setToken(response.accessToken);
          }
        });
    }else{
        //Kiểm tra token còn hạn hay không?  
        //Nếu token còn hạn => Không làm gì cả
        //Nếu token hết hạn => Request cấp token mới (refreshToken)
    }

 

  }, []);

    useEffect(() => {
        if (token!==null){
            client.get(`https://unicode.vn/api/products/index.php`, token+'1', 'public')
            .then(response => {
                console.log(response.status);
                // if (response.status=='success'){
                //     const products = JSON.parse(response.data);
                //     setProducts(products)
                // }
            });
        }
     
    }, [token]);


  return (<>
    <h2>Danh sách sản phẩm</h2>
    {
        products.map((product) => {
            return <p key={product.id}>{product.name}</p>
        })
    }
  </>);
}
