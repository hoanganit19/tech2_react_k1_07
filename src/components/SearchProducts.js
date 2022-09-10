import React, {useState, useCallback} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useDebounce from '../hooks/useDebounce';

export default function SearchProducts() {

  let apiUrl = `https://www.themealdb.com/api/json/v1/1`; 

  const [products, setProducts] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const callApi = (keyword) => {
      
      if (keyword!==''){
        fetch(`${apiUrl}/search.php?s=${keyword}`)
        .then(response => response.json())
        .then(products => {
          setProducts(products);
          setLoading(false);
        });  
      } else{
        setProducts([]);
        setLoading(false);
      } 
     
  }
   const handler = useDebounce((keyword) => {
        callApi(keyword);
   }, 1000);   

   const loadMore = useDebounce(() => {
       console.log('handle load...'); 
   }, 1000);

  const handleSearch = (e) => {
      setLoading(true);  
      const keyword = e.target.value;
      handler(keyword);
      loadMore();
  } 

  const renderSearch = () => {
    if (isLoading){
        return <div className='alert alert-info'>Đang tìm...</div>
    }

    return typeof products.meals!=='undefined' && products.meals.length
        ?
        <div className='search-result'>
        {
            products.meals.map((product) => {
                return (
                    <div key={product.idMeal} className='result-item d-flex py-3'>
                        <img style={{width: '70px', height: '50px'}} src={product.strMealThumb}/>
                        <p>{product.strMeal}</p>
                    </div>
                );
            })
        }
        </div>
        : null
  }

  return (
      <div className='container py-5'>
          <div className='row justify-content-center'>
            <div className='col-8'>
                <div className='search-complete'>
                    <input type={'search'} className={'form-control'} placeholder={'Từ khoá...'} onChange={handleSearch}/>
                    
                    {
                        renderSearch()
                    }
                    
                    
                </div>
            </div>
          </div>
      </div>  
  )
}
