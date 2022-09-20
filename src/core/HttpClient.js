import { Container } from "react-bootstrap";

class HttpClient{

    //callApi
    callApi = async (url, token, method, body=null, typeApi='login') => {
        
        let headers;

        if (token!==null && token!==undefined){
            if (typeApi==='login'){
                headers = {
                    'Authorization': 'Bearer '+token
                }
            }else{
                headers = {
                    'X-XSRF-TOKEN': token
                }
            }
           
        }
        

        const options = {
            method: method,
            headers: headers
        }

        if (body!==null){
            headers["Content-Type"] = "application/json";
            options.headers = headers;
            options.body = JSON.stringify(body);
        }

        const result = await fetch(url, options)
        .then(response => {
            if (!response.ok){
        
                return Promise.reject(response);
            }
            return response.json();
        })

        return result;
    }

    //get
    get = (url, token, type='login') => {
        const result = this.callApi(url, token, 'GET', null, type);
    
        return result;
    }

    //post
    post = (url, token, body) => {
        const result = this.callApi(url, token, 'POST', body);
        return result;
    }

    //login
    login = (url, body) => {
        const result = this.post(url, null, body);
        return result;
    }

    //register
    register = (url, body) => {
        const result = this.post(url, null, body);
        return result;
    }

    //put
    put = (url, token, body) => {
        const result = this.callApi(url, token, 'PUT', body);
        return result;
    }

    //patch
    patch = (url, token, body) => {
        const result = this.callApi(url, token, 'PATCH', body);
        return result;
    }

    //delete
    delete = (url, token) => {
        const result = this.callApi(url, token, 'DELETE');
        return result;
    }

    //create spa token
    csrfToken = (url) => {
        const result = this.callApi(url, null, 'GET');
        return result;
    }

}

export default HttpClient;