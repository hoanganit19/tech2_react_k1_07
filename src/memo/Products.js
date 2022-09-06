import React, {useState, useMemo} from 'react'

export default function Products() {

    const [products, setAddProduct] = useState([]);

    const [name, setProductName] = useState('');

    const [price, setProductPrice] = useState('');

    const changeValue1 = (e) => {
        setProductName(e.target.value);
       
    }

    const changeValue2 = (e) => {
        setProductPrice(e.target.value);
    }

    const handleAddProduct = () => {
        
        setAddProduct(products.concat({name: name, price: parseInt(price)}));

    }       

    // const total = products.reduce((total, product) => {
    //     console.log('re-render');
    //     return total+product.price;
    // }, 0);

    const total =  useMemo(() => {
        return products.reduce((total, product) => {
                console.log('re-render');
                return total+product.price;
        }, 0)
    }, [products]);

  return (
        <>
            <input type={'text'} name={'name'} placeholder={'Tên sản phẩm...'} onChange={changeValue1}/> <br/>
            <input type={'number'} name={'price'} placeholder={'Giá sản phẩm...'} onChange={changeValue2}/> <br/>
            <button type={'button'} onClick={handleAddProduct}>Add</button>
            <h3>Total: {total}</h3>
            <div>
                {products.map((product, index) => {
    
                    return (
                        <React.Fragment key={index}>
                        <p>Tên: {product.name}</p>
                        <p>Giá: {product.price}</p>
                        </React.Fragment>
                    )
                })}
            </div>
        </>
  )
}
